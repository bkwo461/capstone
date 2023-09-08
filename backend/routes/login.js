const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const { User } = require("../models/account");

router.post(
    "/",
    [
        body("email").isEmail().withMessage("Must be a valid email address."),
        body("password").isLength({ min: 5 }).withMessage("Password must be at least 5 characters long."),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            // If there are errors, send them back to the client.
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const user = await User.findOne({ email: req.body.email });

            if (!user) {
                return res.status(403).json({
                    loginsuccess: false,
                    message: "User does not exist",
                });
            }

            const isMatch = await user.comparePassword(req.body.password);

            if (!isMatch) {
                return res.status(404).json({
                    loginsuccess: false,
                    message: "Wrong Password",
                });
            }

            await user.generateToken();

            // res.cookie("createToken", user.token).status(200).json({ loginsuccess: true, userId: user._id });
            res.status(200).json({ loginsuccess: true, userId: user._id, createToken: user.token });
        } catch (err) {
            // Handle errors appropriately
            console.error(err);
            res.status(500).json({
                loginsuccess: false,
                message: "Server Error",
            });
        }
    }
);

module.exports = router;
