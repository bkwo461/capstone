const express = require('express');
const router = express.Router();
const { create } = require('domain');
const AWS = require('aws-sdk');
require('aws-sdk/lib/maintenance_mode_message').suppress = true;
const debug = false;

const { BSON, EJSON, ObjectId } = require('bson');
const { UserAWS } = require('../../models/UserAWSModel');
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(process.env.MONGODB_URI);
const collection = client.db("test").collection("useraws");


// AWS Config
AWS.config.update({
    "accessKeyId": "",
    "secretAccessKey": "",
    "region": "ap-southeast-2",
    // "sessionToken": "", // Only applicable when using university account 
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


// RDS Cluster Creation
const rds = new AWS.RDS();

const params = {
    DBInstanceIdentifier: 'sdk-rds', // Set your RDS instance name
    AllocatedStorage: 20, // Storage in GB
    DBInstanceClass: 'db.t2.micro', // Free Tier eligible instance type
    Engine: 'mysql', // Database engine (e.g., MySQL, PostgreSQL, etc.)
    MasterUsername: 'admin', // Master username
    MasterUserPassword: 'password123', // Master password
    // VpcSecurityGroupIds: ['sg-0123456789abcdef0'], // Security group IDs
    AvailabilityZone: 'ap-northeast-2a', // Availability zone
    MultiAZ: false, // Disable Multi-AZ for Free Tier eligibility
    StorageType: 'gp2', // Storage type (e.g., gp2, standard)
    BackupRetentionPeriod: 7, // Backup retention period in days
  };

rds.createDBInstance(params, (err, data) => {
  if (err) {
    console.error('Error creating RDS instance:', err);
  } else {
    console.log('RDS instance created successfully:', data.DBInstance.DBInstanceIdentifier);
  }
});



// Routes
router.get('/getAllUsers', async (req, res) => {
    // #swagger.tags = ['CDK']
    try {
        const users = await UserAWS.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ isError: true, message: 'Error fetching users', rawErr: err });
    }
});

router.post('/getUserByEmail', async (req, res) => {
    // #swagger.tags = ['CDK']
    const { email } = req.body;
    try {
        let user = await UserAWS.find({ email: email });
        if (user.length == 0) res.status(404).json({ isError: true, message: "User not found" });
        else res.status(200).json(user);
    } catch {
        res.status(500).json({ isError: true, message: 'Error fetching user', rawErr: err });
    }
});

router.post('/create', async (req, res) => {
    // #swagger.tags = ['CDK']
    const { email, username, rdsLink } = req.body;
    createFullUser(username).then(async data => {
        if (data.isError) {
            res.status(400).json(data);
        } else {
            // Save to database
            const userAWS = new UserAWS({
                email: req.body.email,
                username: req.body.username,
                accesskey: data.accessKey,
                secretkey: data.secretAccessKey,
            });

            try {
                const userInfo = await userAWS.save();
                res.status(201).json(data);
            } catch (err) {
                res.status(400).json({ isError: true, message: 'Failed to save to DB', rawErr: err });
            }

        }
    }).catch(err => {
        res.status(500).json({ isError: true, message: 'Error creating user', rawErr: err });
    });
});

router.delete('/delete', getUser, async (req, res) => {
    // #swagger.tags = ['CDK']
    const { username } = req.body;

    let user = res.user[0];
    if (user == null) res.status(404).json({ isError: true, message: "User not found" });
    else {
        let accesskey = user.accesskey;
        collection.deleteOne(user, (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ isError: true, message: "Failed to delete User" });
            }

            if (result.deletedCount === 0) {
                res.status(404).json({ isError: true, message: "User not found" });
            }

            deleteUser(username, accesskey).then(async data => {
                res.status(200).json(data)
            }).catch(err => {
                res.status(500).json({ isError: true, message: 'Error deleting user', rawErr: err });
            });

        });
    }

});

router.patch('/replace', getUser, async (req, res) => {
    // #swagger.tags = ['CDK']
    const { username } = req.body;

    let user = res.user[0];
    if (user == null) res.status(404).json({ isError: true, message: "User not found" });
    else {
        let accesskey = user.accesskey;

        issueNewAccessKey(username, accesskey).then(async data => {
            if (data.isError) {
                res.status(400).json(data);
            } else {

                collection.updateOne(res.user[0], { $set: { accesskey: data.accessKey, secretkey: data.secretAccessKey } }, (err, result) => {
                    if (err) {
                        console.log(err);
                        res.status(500).json({ error: "Failed to update DB" });
                    } else res.status(200).json(data);
                });

            }
        }).catch(err => {
            res.status(500).json({ isError: true, message: 'Error replacing access key', rawErr: err });
        });
    }
});



// Middleware setup
async function getUser(req, res, next) {
    let user;
    const { username } = req.body;
    try {
        user = await UserAWS.find({ username: username });
        if (user === null) return res.status(404).json({ isError: true, message: "User not found" });
    } catch {
        return res.status(500).json({ isError: true, message: 'Error fetching user', rawErr: err });
    }

    res.user = user;
    next();
}






module.exports = router;