const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const sendMail = async (email, title, body, authNumber) => {
    try {
        let transporter = nodemailer.createTransport({
            service: "Naver",
            auth: {
                user: "hanjun0818@naver.com",
                pass: "Han@132435",
            },
        });
        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: title,
            html: body,
        };

        let sendOtp = await transporter.sendMail(mailOptions);
        console.log("Email sent", sendOtp);

        return sendOtp;
    } catch (err) {
        console.log("Error sending email", err);
        throw err;
    }
};

module.exports = { sendMail };
