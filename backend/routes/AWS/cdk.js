const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk');
const { create } = require('domain');
require('aws-sdk/lib/maintenance_mode_message').suppress = true;

const debug = false;



AWS.config.update({
    "accessKeyId": "AKIARLGFEM73OF2YSA4Q",
    "secretAccessKey": "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",
    "region": "ap-southeast-2"
});

AWS.config.getCredentials(function (err) {
    if (err) console.log(err.stack); // credentials not loaded
    else {
        console.log("ROOT Access key:", AWS.config.credentials.accessKeyId);
    }
});





var iam = new AWS.IAM({apiVersion: '2010-05-08'});


// Create User
function createPolicy(username, rdsLink) {
    const userName = username;
    const policyName = `${userName}-policy`;
    const policyDocument = {
        Version: '2012-10-17',
        Statement: [
            {
                Effect: 'Allow',
                Action: 'rds:*',
                Resource: '*', //Link to personal RDS instance! ('arn:aws:s3:::your-bucket-name/*') [rdsLink]
            },
        ],
    };

    const PolicyParams = {
        PolicyName: policyName,
        PolicyDocument: JSON.stringify(policyDocument),
    };

    return PolicyParams;
} function createAccessKey(username) {
    const params = {
        UserName: username,
    };
    let result = {
        user: null,
        accessKey: null,
        secretAccessKey: null,
        isError: false,
        message: null,
        rawErr: null,
    };
    return new Promise((resolve, reject) => {
        iam.createAccessKey(params, function (err, data) {
            if (err) { // an error occurred  
                if (debug) console.log(err, err.stack);
                result.isError = true; result.message = 'Error creating IAM access key'; result.rawErr = err;
                resolve(result); 
            } else { // successful response
                if (debug) console.log(data);
                if (debug) console.log(`Access Key ID: ${data.AccessKey.AccessKeyId} \nSecret Access Key: ${data.AccessKey.SecretAccessKey} \nUser ID: ${data.AccessKey.UserName}`);
                result.user = data.AccessKey.UserName;
                result.accessKey = data.AccessKey.AccessKeyId;
                result.secretAccessKey = data.AccessKey.SecretAccessKey;
                if (debug) console.log(result);
                resolve(result);
            }
        });
    });
} function createFullUser(username, rdsLink) {
    const userparams = {
        UserName: username
    };

    let result = {
        user: null,
        accessKey: null,
        secretAccessKey: null,
        isError: false,
        message: null,
    };

    return new Promise((resolve, reject) => {
        iam.createPolicy(createPolicy(username, rdsLink), (err, policyData) => { // Create Policy
            if (err) {
                if (debug) console.error('Error creating IAM policy:', err);
                result.isError = true; result.message = 'Error creating IAM policy'; result.rawErr = err;
                resolve(result);
            } else {
                if (debug) console.log('IAM policy created successfully:', policyData.Policy.PolicyName);
            }

            iam.getUser(userparams, function (err, data) { // Check if user already exists
                if (err && err.code === 'NoSuchEntity') {   

                    iam.createUser(userparams, async function (err, data) {  // Create user
                        if (err) {
                            if (debug) console.log("Error creating IAM user:", err);
                            result.isError = true; result.message = 'Error creating IAM user'; result.rawErr = err;
                            resolve(result);
                        } else {
                            if (debug) console.log("User Creation Success", data);

                            
                            if (debug) console.log(`policyData: ${policyData}`)

                            const attachPolicyParams = {
                                PolicyArn: policyData.Policy.Arn,
                                UserName: data.User.UserName,
                            };

                            iam.attachUserPolicy(attachPolicyParams, (err, data) => {
                                if (err) {
                                    if (debug) console.error('Error attaching policy to IAM user:', err);
                                    result.isError = true; result.message = 'Error attaching policy to IAM user'; result.rawErr = err;
                                    resolve(result);
                                } else {
                                    if (debug) console.log('Policy attached to IAM user successfully:', data);
                                }
                            });


                            // Create Access Key
                            createAccessKey(username).then(data => {resolve(data);}).catch(err => {if(debug) console.log(err);});

                        }
                    });

                } else {
                    if (debug) console.log("User " + userparams.UserName + " already exists", data.User.UserId);
                    result.isError = true; result.message = `User ${userparams.UserName} already exists`; result.rawErr = err;
                    resolve(result);
                }
            });
        });
    });
}

// Manage User
function listAllUsers() {
    const params = {};
    iam.listUsers(params, (err, data) => {
        if (err) {
            console.error('Error listing IAM users:', err);
        } else {
            console.log('IAM Users:');
            data.Users.forEach((user, index) => {
                console.log(`${index + 1}. User Name: ${user.UserName}`);
            });
        }
    });
} function deleteAccessKey(username, accessKeyId) {
    const params = {
        AccessKeyId: accessKeyId,
        UserName: username,
    };
    return new Promise((resolve, reject) => {
        iam.deleteAccessKey(params, (err, data) => {
            if (err) {
                if(debug) console.error('Error deleting access key:', err);
                resolve(err);
            } else {
                if(debug) console.log('Access key deleted:', data);
                resolve(data);
            }
        });
    });
} function deleteUser(username, accessKeyId) {
    const sts = new AWS.STS();

    deleteAccessKey(username, accessKeyId).then(data => {
        new Promise((resolve, reject) => {
            sts.getCallerIdentity({}, (err, data) => {
                if (err) {
                    console.error('Error fetching account ID:', err);
                } else {
                    console.log('AWS Account ID:', data.Account);
                    resolve(data.Account);
                }
            });
        }).then(accountID => {
    
            const Userparams = {
                UserName: username,
            };
            const policyParams = {
                PolicyArn: `arn:aws:iam::${accountID}:policy/${username}-policy`,
                UserName: username,
            };
            const policyDeleteParams = {
                PolicyArn: `arn:aws:iam::${accountID}:policy/${username}-policy`,
            };
    
            iam.detachUserPolicy(policyParams, (err, data) => {
                if(debug) console.log(`Policy '${policyParams.PolicyArn}' detached from IAM user '${policyParams.UserName}'`);
    
                iam.deleteUser(Userparams, (err, data) => {
                    if (err) {
                        if(debug) console.error('Error deleting IAM user:', err);
                    } else {
                        if(debug) console.log(`User '${username}' deleted successfully`);
                    }
                });
    
                iam.deletePolicy(policyDeleteParams, (err, data) => {
                    if (err) {
                        if(debug) console.error('Error deleting user policy:', err);
                    } else {
                        if(debug) console.log(`Policy '${policyDeleteParams.PolicyArn}' has been succesfully deleted`);
                    }
                });
            });
        });
    });
} function issueNewAccessKey(username, accessKeyId) {
    return new Promise((resolve, reject) => {
        deleteAccessKey(username, accessKeyId).then(data => {
            createAccessKey(username).then(data => {
                resolve(data);
            });
        });
    });
}


async function main() {
    // createFullUser('testuser0').then(data => {console.log(data);}).catch(err => {console.log(err);});
    listAllUsers();
    // createAccessKey('testuser0').then(data => {console.log(data);}).catch(err => {console.log(err);});
    // deleteAccessKey('testuser1', 'AKIARLGFEM73OKISFA6P');
    // deleteUser('testuser0', 'AKIARLGFEM73JCOM6UW6');
    // issueNewAccessKey('testuser0', 'AKIARLGFEM73FEYNBETJ').then(data => {console.log(data);}).catch(err => {console.log(err);});
}

main();


// router.get('/', (req, res) => {
//     // #swagger.tags = ['CDK']
//     res.status(200).send('Hello World (CDK)');
// });


// module.exports = router;