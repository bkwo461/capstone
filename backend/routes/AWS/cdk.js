const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    // #swagger.tags = ['CDK']
    res.status(200).send('Hello World (CDK)');
});


module.exports = router;