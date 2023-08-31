const otpGenerator = require('otp-generator');
const { OTP } = require('../models/OTPModel');
const mailer = require('./mailer');
const { User } = require('../models/Account');

exports.sendOtp = async (req, res) => {
    try {
        const { email } = req.body;
        const checkUser = await User.findOne({ email });
        if (checkUser) {
            return res.status(401).json({
                success: false,
                message: "Email already exists"
                });
        }
        let otp = otpGenerator.generate(6, { upperCase: false, specialChars: false, alphabets: false });
        let result = await OTP.findOne({ otp: otp }); 
        while (result) {
            otp = otpGenerator.generate(6, { upperCase: false, specialChars: false, alphabets: false });
            result = await OTP.findOne({ otp: otp });
        }
        const otpPayload = {
            email,
            otp
        }
        
        const newOtp = new OTP(otpPayload);
        await newOtp.save();

        return res.status(200).json({
            success: true,
            message: "OTP sent successfully",
            Sent: otp
        });
    } catch (err) {
        console.log("Error sending OTP", err);
        return res.status(500).json({
            success: false,
            message: "Error sending OTP"
        });
    }
};