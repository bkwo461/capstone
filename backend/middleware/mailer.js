const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const mailer = async (email, title, body, authNumber) => {
    try{
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 465,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });
        const mailoptions = {
            from: process.env.EMAIL,
            to: email,
            subject: title,
            html: body,
        };
        let sendOtp = await transporter.sendMail(mailoptions, (err, data) => {
            if (err) {
                res.status(500).json({
                  message: `Failed to send authentication email to ${email}`,
                });
              } else {
                res.status(200).json({
                  authNumber,
                  message: `Authentication mail is sent to ${email}`,
                  data,
                });
              }
        });
        console.log("Email sent", sendOtp);
    }   catch (err) {
        console.log("Error sending email", err);
        throw err;
    }
}

module.exports = mailer;

