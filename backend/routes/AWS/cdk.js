const express = require('express');
const router = express.Router();


/**
* @swagger
* /api/cdk:
*  get:
*    description: Test API endpoint for future CDK deployment
*    responses:
*      '200':
*        description: A successful response
*/

router.get('/', (req, res) => {
    res.status(200).send('Hello World (CDK)');
});


module.exports = router;