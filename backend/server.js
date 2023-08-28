const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    console.log('Hello World');
    res.status(200).send('Hello World');
    // res.status(200).json({"message": "Hello World"}); // Send in JSON format
});


// Link Routes
const cdkRoutes = require('./routes/AWS/cdk');
app.use('/cdk', cdkRoutes);

app.listen(port);
