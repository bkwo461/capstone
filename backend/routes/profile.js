const express = require("express");
const router = express.Router();

const { auth } = require("../middleware/auth");

router.get("/", auth, async (req, res) => {
    // #swagger.tags = ['Authentication']
    // #swagger.description = 'Endpoint to get user profile'
    /* #swagger.security = [{
                "createdToken": []
        }] */

    try {
        const userProfile = req.user;
        return res.status(200).json({
            success: true,
            surname: userProfile.surname,
            firstName: userProfile.lastname,
        });
    } catch (error) {
        console.error("Error fetching user profile", error);
        return res.status(500).json({
            success: false,
            message: "Error fetching user profile",
        });
    }
});

module.exports = router;
