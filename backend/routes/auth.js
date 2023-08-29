const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const { User } = require('../models/Account');

router.get("/", auth, (req, res) => {
    res.status(200).json({
      _id: req.user._id,
      email: req.user.email,
      name: req.user.name,
      title: req.user.title,
      isAuth: true,
    });
});

module.exports = router;
