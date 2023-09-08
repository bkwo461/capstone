const mongoose = require("mongoose");

const userAwsSchema = mongoose.Schema({
    email: {
        type: String,
        trim: true,
        unique: 1,
        required: true,
    },
    username: {
        type: String,
        unique: 1,
        required: true,
    },
    accesskey: {
        type: String,
        required: true,
    },
    secretkey: {
        type: String,
        required: true,
    },
});

const UserAWS = mongoose.model("UserAWS", userAwsSchema);

module.exports = { UserAWS };
