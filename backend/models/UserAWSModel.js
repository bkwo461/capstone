const mongoose = require('mongoose');

const userAwsSchema = mongoose.Schema({

    email: {
        type: String,
        trim: true,
        unique: 1,
    },
    username: {
        type: String,
        unique: 1,
    },
    accesskey: {
        type: String,
    },
    secretkey: {
        type: String,
    },

});


const UserAWS = mongoose.model("UserAWS", userAwsSchema);
  
module.exports = { UserAWS };