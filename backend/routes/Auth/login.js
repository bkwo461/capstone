const express = require('express');
const router = express.Router();

const { User } = require('../../models/Account');


/**
 * @swagger
 * /api/login:
 *  post:
 *    description: Login user.
 *    responses:
 *      '200':
 *        description: A successful response
 *      '500':
 *        description: Server Error
 */
router.post("/", async (req, res) => {
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