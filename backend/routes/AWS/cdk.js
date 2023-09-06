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

AWS.config.getCredentials(function(err) {
    if (err) console.log(err.stack); // credentials not loaded
    else {
      console.log("ROOT Access key:", AWS.config.credentials.accessKeyId);
    }
  });

var iam = new AWS.IAM({apiVersion: '2010-05-08'});


// Create User
function createAccessKey(params) {
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
}

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
}

function createFullUser(username, rdsLink) {
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
                            createAccessKey(userparams).then(data => {resolve(data);}).catch(err => {console.log(err);});

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


async function main() {
    // console.log(createFullUser('testuser8'));
    createFullUser('testuser9').then(data => {console.log(data);}).catch(err => {console.log(err);});
}

main();


// router.get('/', (req, res) => {
//     // #swagger.tags = ['CDK']
//     res.status(200).send('Hello World (CDK)');
// });


// module.exports = router;