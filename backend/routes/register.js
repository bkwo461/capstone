const express = require("express");
const router = express.Router();
const { body, validationResult, check } = require("express-validator");

const { User } = require("../models/account");

router.post(
    "/",
    [
        body("surname")
            .trim()
            .notEmpty()
            .withMessage("Surname is required.")
            .matches(/^[A-Za-z]+$/)
            .withMessage("Surname must contain only alphabets."),
        body("firstName").trim().notEmpty().withMessage("Last name is required."),
        body("email").isEmail().withMessage("Must be a valid email address."),
        body("password").isLength({ min: 5 }).withMessage("Password must be at least 5 characters long."),
    ],

    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            // If there are errors, send them back to the client.
            return res.status(400).json({ errors: errors.array() });
        }
        // check if user email already exists in database
        let existingUser;
        try {
            existingUser = await User.findOne({ email: req.body.email });
        } catch (error) {
            console.error(error);
            // Handle error appropriately here.
        }

        if (existingUser) {
            return res.status(400).json({ errors: [{ msg: "User already exists" }] });
        }

        const user = new User(req.body);

        try {
            const userInfo = await user.save();
            res.status(200).json({ success: true, userInfo });
        } catch (err) {
            res.json({ success: false, err });
        }
    }
);

module.exports = router;
