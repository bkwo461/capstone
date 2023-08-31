const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const { User } = require('../models/Account');


router.get('/', auth, async (req, res) => {
    // #swagger.tags = ['Authentication']
    try {
        const user = await User.findOneAndUpdate({ _id: req.user._id }, { token: "" });
        res.status(200).send({ success: true, message: "Logout success" });
    } catch (err) {
        res.json({ success: false, err });
    }
})
    

module.exports = router;