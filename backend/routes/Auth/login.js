const express = require('express');
const router = express.Router();

const { User } = require('../../models/Account');


router.post("/", async (req, res) => {
  // #swagger.tags = ['Authentication']
    try {
      const user = await User.findOne({ email: req.body.email });
  
      if (!user) {
        return res.json({
          loginsuccess: false,
          message: "User does not exist",
        });
      }
  
      const isMatch = await user.comparePassword(req.body.password);
  
      if (!isMatch) {
        return res.json({
          loginsuccess: false,
          message: "Wrong Password",
        });
      }
  
      await user.generateToken();
  
      res
        .cookie("createToken", user.token)
        .status(200)
        .json({ loginsuccess: true, userId: user._id });
    } catch (err) {
      // Handle errors appropriately
      console.error(err);
      res.status(500).json({ loginsuccess: false, message: "Server Error" });
    }
});  


module.exports = router;