const express = require('express');
const router = express.Router();

const { User } = require('../../models/Account');

router.post("/", async (req, res) => {
  // #swagger.tags = ['Authentication']
  const user = new User(req.body);

  try {
    const userInfo = await user.save();
    res.status(200).json({ success: true, userInfo });
  } catch (err) {
    res.json({ success: false, err });
  }
});


module.exports = router;