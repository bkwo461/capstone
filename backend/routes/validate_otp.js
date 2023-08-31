const express = require('express');
const router = express.Router();
const { OTP } = require('../models/OTPModel'); // import your otp model

router.post("/", async (req, res) => {
    const otpRecord = await OTP.findOne({ email: req.body.email });

     if (!otpRecord || otpRecord.otp !== req.body.otp) {
       return res.status(400).json({ success:false,message:'Invalid or expired OTP'});
     }

     // If validation is successful then redirect to signup page
     return res.json({ success: true, message: 'OTP validated successfully' });
});

module.exports = router;
