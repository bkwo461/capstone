const AWS = require('aws-sdk');
require('aws-sdk/lib/maintenance_mode_message').suppress = true;
const debug = false;

// AWS Config
AWS.config.update({
    "accessKeyId": "ASIA24SJFHH7X6YHWTTJ",
    "secretAccessKey": "r60qeuN5iKx2p8qG5JDqzru01dYpTcGAFGXB4dRX",
    "region": "ap-southeast-2",
    "sessionToken": "IQoJb3JpZ2luX2VjELD//////////wEaDmFwLXNvdXRoZWFzdC0yIkYwRAIgYrpR+FRd+lSQ6yuKapngLQnPwUkU3Vmqa0W1Sbp2yWwCICD6KcUf8991pDL7aKOq9I54XnaNxhsAh8kBJaob7F3JKpsDCIn//////////wEQABoMNzQ4NTUxNDg1OTUxIgxGKYtNZIPs6miTSJAq7wJL4rBzOZBIyWBEKk75DYAA9I05lPnzRB1e3guPmncYWJgVyLruVnPdlRu/6q53POMS0LvbOVt2Cw4O94vus6qWDJfkTQhSels+Kk7HE8/dvki7y5dCQI0yDaxt896SqeC/tLjrTAJKCcjqyoLydOrKwriTG6PUevKpA7b4Bt7XFe0wXYiJDslEcIZotwdllEKYD6sZixt14qgPlO6r27ZpUiO4YqANTJkT8RCMNElSue0MEqC2f5q1Fs4yBK7WFdal0CStpzwFg3uuMkGnt8IHuusNs3N6WCmiJQbsaDRydwOA7MBQ9Nf48POOmQByN2sZUmt/grQA4+ZyIFkqoQ50jkHTaeXfoPtwDkqkCm9Qn0k7ltsKNGVy8Ukn1TQYwsmONkEp7RQ6+K0+W8Sxsz+nKyTIdFSrw1Yq8fMobaFFdKK3tnB8YHlncopdJHuJi/5hrSICCRqp1Y9jWxnXSEeLiNt57SHl7JjGBibMahxdMKaO5qcGOqcB/q9aKk2p/NlRwyaK/0sH1iEd7/91N3k+x4o1kakEDUmihfoPlvKI+P/jKw0zxz4GTazoDZ+Tck7bFGPo+Mnj2x+sJg/ei29sZoaNw7In1z/VeiavZg1Er82XMr8ovKRBy2poMZd6uvyHbdMg5QPCjmbikVFd/IGAyKdzAaab6IVd9mDjytEUmmasetClqg9Tugy1FDXIZv4Yo3e2yXSHxAp/Sx0zVVE=", // Only applicable when using university account 
}); AWS.config.getCredentials(function (err) {
    if (err) console.log(err.stack); // credentials not loaded
    else {
        console.log("ROOT Access key:", AWS.config.credentials.accessKeyId);
    }
});

var iam = new AWS.IAM({ apiVersion: '2010-05-08' });


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
                            createAccessKey(username).then(data => { resolve(data); }).catch(err => { if (debug) console.log(err); });

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
                if (debug) console.error('Error deleting access key:', err);
                resolve(err);
            } else {
                if (debug) console.log('Access key deleted:', data);
                resolve(data);
            }
        });
    });
} function deleteUser(username, accessKeyId) {
    const sts = new AWS.STS();
    let result = {
        user: username,
        accessKey: accessKeyId,
        secretAccessKey: null,
        isError: false,
        message: null,
        rawErr: null,
    };

    return new Promise((resolve, reject) => {
        deleteAccessKey(username, accessKeyId).then(data => {
            new Promise((resolve, reject) => {
                sts.getCallerIdentity({}, (err, data) => {
                    if (err) {
                        console.error('Error fetching account ID:', err);
                        result.isError = true; result.message = 'Error fetching account ID'; result.rawErr = err;
                        resolve(result);
                    } else {
                        console.log('AWS Account ID:', data.Account);
                        resolve(data.Account);

                    }
                });
            }).then(accountID => {

                if (/^\d+$/.test(accountID)) {

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
                        if (debug) console.log(`Policy '${policyParams.PolicyArn}' detached from IAM user '${policyParams.UserName}'`);

                        iam.deletePolicy(policyDeleteParams, (err, data) => {
                            if (err) {
                                if (debug) console.error('Error deleting user policy:', err);
                                result.isError = true; result.message = 'Error deleting user policy'; result.rawErr = err;
                                resolve(result);
                            } else {
                                if (debug) console.log(`Policy '${policyDeleteParams.PolicyArn}' has been succesfully deleted`);

                                iam.deleteUser(Userparams, (err, data) => {
                                    if (err) {
                                        if (debug) console.error('Error deleting IAM user:', err);
                                        result.isError = true; result.message = 'Error deleting IAM user'; result.rawErr = err;
                                        resolve(result);
                                    } else {
                                        if (debug) console.log(`User '${username}' deleted successfully`);
                                    }
                                });
                            }
                        });

                        result.message = `User '${username}' and all related objects has been succesfully deleted`;
                        resolve(result);

                    });
                } else {
                    result.isError = true; result.message = 'Error fetching account ID';
                    resolve(result);
                }

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


module.exports = { createFullUser, listAllUsers, deleteUser, issueNewAccessKey };