
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

const rds = new AWS.RDS({ apiVersion: '2014-10-31' });

// RDS Instance Management
function createRDSInstance(dbName, username, password) {
    let result = {
        name: dbName,
        rdsinfo: [{
            Identifier: null,
            Status: null,
            Arn: null,
            Endpoint: null,
            Engine: null,
            EngineVersion: null,
        }],
        isError: false,
        message: null,
    }; const CreationParams = {
        DBInstanceIdentifier: dbName, // Set your RDS instance name
        AllocatedStorage: 20, // Storage in GB
        DBInstanceClass: 'db.t2.micro', // Free Tier eligible instance type
        Engine: 'mysql', // Database engine (e.g., MySQL, PostgreSQL, etc.)
        MasterUsername: username, // Master username
        MasterUserPassword: password, // Master password
        MultiAZ: false, // Disable Multi-AZ for Free Tier eligibility
        StorageType: 'gp2', // Storage type (e.g., gp2, standard)
        BackupRetentionPeriod: 7, // Backup retention period in days
    };

    return new Promise((resolve, reject) => {
        rds.createDBInstance(CreationParams, (err, data) => {
            if (err) {
                if (debug) console.error('Error creating RDS instance:', err);
                result.isError = true; result.message = 'Error creating RDS instance'; result.rawErr = err;
                reject(result);
            } else {
                if (debug) console.log(data);
                result.rdsinfo = [{
                    Identifier: data.DBInstance.DBInstanceIdentifier,
                    Status: data.DBInstance.DBInstanceStatus,
                    Arn: data.DBInstance.DBInstanceArn,
                    Endpoint: data.DBInstance.Endpoint,
                    Engine: data.DBInstance.Engine,
                    EngineVersion: data.DBInstance.EngineVersion,
                }]
                console.log(data);
                result.message = `RDS instance '${dbName}' has been succesfully created`;
                resolve(result);
            }
        });
    });
} function deleteRDSInstance(dbName) {
    let result = {
        name: dbName,
        rdsinfo: [{
            Identifier: null,
            Status: null,
            Arn: null,
            Endpoint: null,
            Engine: null,
            EngineVersion: null,
        }],
        isError: false,
        message: null,
    }; const DeletionParams = {
        DBInstanceIdentifier: dbName,
        DeleteAutomatedBackups: true,
        SkipFinalSnapshot: true
    };

    return new Promise((resolve, reject) => {
        rds.deleteDBInstance(DeletionParams, function (err, data) {
            if (err) {
                if (debug) console.error('Error deleting RDS instance:', err);
                result.isError = true; result.message = 'Error deleting RDS instance'; result.rawErr = err;
                reject(result);
            }
            else {
                if (debug) console.log(data);
                result.rdsinfo = [{
                    Identifier: data.DBInstance.DBInstanceIdentifier,
                    Status: data.DBInstance.DBInstanceStatus,
                    Arn: data.DBInstance.DBInstanceArn,
                    Endpoint: data.DBInstance.Endpoint,
                    Engine: data.DBInstance.Engine,
                    EngineVersion: data.DBInstance.EngineVersion,
                }]
                console.log(data.DBInstance);
                result.message = `RDS instance '${dbName}' has been succesfully deleted`;
                resolve(result);
            }
        });
    });
} function infoRDSInstance(dbName) {
    let result = {
        name: dbName,
        rdsinfo: [{
            Identifier: null,
            Status: null,
            Arn: null,
            Endpoint: null,
            Engine: null,
            EngineVersion: null,
        }],
        isError: false,
        message: null,
    }; let DescribeParams;
    if (dbName)  {DescribeParams = { DBInstanceIdentifier: dbName, }; }
    else { DescribeParams = {}; }

    return new Promise((resolve, reject) => {
        rds.describeDBInstances(DescribeParams, async (err, data) => {
            if (err) {
                result.isError = true; result.message = 'Error retrieving information from a RDS instance'; result.rawErr = err;
                reject(result);
            }
            else {
                console.log(data);
                for (let i = 0; i < data.DBInstances.length; i++) {
                    result.rdsinfo[i] = {
                        Identifier: data.DBInstances[i].DBInstanceIdentifier,
                        Status: data.DBInstances[i].DBInstanceStatus,
                        Arn: data.DBInstances[i].DBInstanceArn,
                        Endpoint: data.DBInstances[i].Endpoint,
                        Engine: data.DBInstances[i].Engine,
                        EngineVersion: data.DBInstances[i].EngineVersion,
                    }
                }
                resolve(result);
            } 
        });
    });
} 

module.exports = { createRDSInstance, deleteRDSInstance, infoRDSInstance };