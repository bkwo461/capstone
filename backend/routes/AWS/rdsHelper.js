
const AWS = require('aws-sdk');
require('aws-sdk/lib/maintenance_mode_message').suppress = true;
const debug = false;

// AWS Config
AWS.config.update({
    "accessKeyId": "ASIA24SJFHH7TPXCTIEX",
    "secretAccessKey": "SNY2mYh7beGdZMk502iGfQrpPhZrjS0a0q7aEFuH",
    "region": "ap-southeast-2",
    "sessionToken": "IQoJb3JpZ2luX2VjELP//////////wEaDmFwLXNvdXRoZWFzdC0yIkYwRAIgBpMzeX6CSNzwAySU1+V0dFipxUEkYITypNmZOw1duj8CICuaXwrmqEOknEmvUHgrS/78wf1PKRx3hiVUvp5gnYQxKpsDCIz//////////wEQABoMNzQ4NTUxNDg1OTUxIgwknOY8P4oh+GNNNQgq7wIId7u/ydQyXpRqWXclWo5v0uEzNXE9RVyPl9Jf6gi9HmDNpvCZ53J/Vf66L4b7/rof6MhCYgvDJCb3lmE+wDUo+0hMjzJZRR+E+/dcaBveQubNFFV1GDfjA/lfsVtUpe9ZDjCE8qaFTeDaMMWmS87ERUOgcTtbQCBTYj7Wtnrc80r2onEDSXf3OSk7ij1Dj7BN/8CV8x+ID8CyWCYd8ZsmbcmCY2NB+RdjUocnmBqJRDNgII8XH32lejf7n5CzeYWkUdKsa0mNrfyn7cystM7UKvI6t1BlNKZZ/PKSXTj5IkrpQam1vgc+9hGuovTDq20x9FK7TfsyRoIINugB5CwUE0xBbDOzpYOfg4G5/KDH2EQXniQeUPb03SRfhIwAuQwzmSk0A8mc9pAtngJ9ovj7IEZdyvc2BD4K/OZZBR1+tvBHicZLu4pYaMOgg0fFRXb3wE4lZhzDb6JcoxYbd09er0tsOLq22tb9P6OUYShgMJ/Q5qcGOqcB3DVf4UKTLUJVfeE+AxLGXwl0vVsZMdm40EtZBy83Qb3vaAKvJHgr8hAUmfWSgF21OH9tLWAc8RXHL6L2Q9j8VjuFoIbyOYkA+/wx0w8DaemC8UTYMHNRlHb3UMl4xUEUZeWolumcF2zHXkM4ODYLiaji3hIL9a3zUQjRw+gpl6NR34oq5CNYnXg7j7+Z8HJeSwHTmBKfFRCkVq5PoA2gPJSS0zOSGaM=", // Only applicable when using university account 
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
                if (debug) console.log(data);
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
                if (debug) console.log(data.DBInstance);
                result.message = `RDS instance '${dbName}' has been succesfully deleted`;
                resolve(result);
            }
        });
    });
} function infoRDSInstance(dbName) {
    let result = {
        name: dbName,
        rdsinfo: [],
        isError: false,
        message: null,
    }; let DescribeParams;
    if (dbName) { DescribeParams = { DBInstanceIdentifier: dbName, }; }
    else { DescribeParams = {}; }

    return new Promise((resolve, reject) => {
        rds.describeDBInstances(DescribeParams, async (err, data) => {
            if (err) {
                if (err.statusCode == 404) { result.isError = true; result.message = 'No such instance found'; result.rawErr = err; }
                else { result.isError = true; result.message = 'Error retrieving information from a RDS instance'; result.rawErr = err; }
                reject(result);
            }
            else {
                if (debug) console.log(data);
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

function shutdownRDSInstance(dbName) {
    let result = {
        name: dbName,
        rdsinfo: [],
        isError: false,
        message: null,
    }; const stopParams = {
        DBInstanceIdentifier: dbName,
    };

    return new Promise((resolve, reject) => {
        rds.stopDBInstance(stopParams, function (err, data) {
            if (err) {
                if (debug) console.error('Error stopping RDS instance:', err);
                result.isError = true; result.message = 'Error stopping RDS instance'; result.rawErr = err;
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
                if (debug) console.log(data.DBInstance);
                result.message = `RDS instance '${dbName}' has been succesfully stopped!`;
                resolve(result);
            }
        });
    });
} function poweronRDSInstance(dbName) {
    let result = {
        name: dbName,
        rdsinfo: [],
        isError: false,
        message: null,
    }; const stopParams = {
        DBInstanceIdentifier: dbName,
    };

    return new Promise((resolve, reject) => {
        rds.startDBInstance(stopParams, function (err, data) {
            if (err) {
                if (debug) console.error('Error starting RDS instance up:', err);
                result.isError = true; result.message = 'Error starting RDS instance up'; result.rawErr = err;
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
                if (debug) console.log(data.DBInstance);
                result.message = `RDS instance '${dbName}' has been succesfully started!`;
                resolve(result);
            }
        });
    });
} function rebootRDSInstance(dbName) {
    let result = {
        name: dbName,
        rdsinfo: [],
        isError: false,
        message: null,
    }; const stopParams = {
        DBInstanceIdentifier: dbName,
    };

    return new Promise((resolve, reject) => {
        rds.rebootDBInstance(stopParams, function (err, data) {
            if (err) {
                if (debug) console.error('Error while rebooting the RDS instance:', err);
                result.isError = true; result.message = 'Error while rebooting the RDS instance'; result.rawErr = err;
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
                if (debug) console.log(data.DBInstance);
                result.message = `RDS instance '${dbName}' has been succesfully rebooted!`;
                resolve(result);
            }
        });
    });
}

module.exports = { createRDSInstance, deleteRDSInstance, infoRDSInstance, shutdownRDSInstance, poweronRDSInstance, rebootRDSInstance };