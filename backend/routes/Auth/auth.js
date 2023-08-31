const express = require('express');
const router = express.Router();
const { auth } = require('../../middleware/auth');
const { User } = require('../../models/Account');


router.get("/", auth, (req, res) => {
    // #swagger.tags = ['Authentication']
    // Sample Custom Parameter Definition 
    // /*	#swagger.parameters['obj'] = {
    //         in: 'body',
    //         description: 'User information.',
    //         required: true,
    //         schema: { $ref: "#/definitions/AddUser" }
    // } */
    res.status(200).json({
      _id: req.user._id,
      email: req.user.email,
      name: req.user.name,
      title: req.user.title,
      isAuth: true,
    });
});

module.exports = router;
