const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const cookieParser = require('cookie-parser');

const connectMongoDB = require("./config/db.js");


require("dotenv").config();

app.use(cors({
    origin: "*",
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
    credentials: true
  }));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.get('/', (req, res) => {
    console.log('Hello World');
    res.status(200).send('Hello World');
    // res.status(200).json({"message": "Hello World"}); // Send in JSON format
});

// Connect to MongoDB
connectMongoDB();

// Link Routes
const cdkRoutes = require('./routes/AWS/cdk');
const registerRoutes = require('./routes/register');
const loginRoutes = require('./routes/login');
const authRoutes = require('./routes/auth');
const logoutRoutes = require('./routes/logout');

app.use('/api/cdk', cdkRoutes);
app.use('/api/register', registerRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/logout', logoutRoutes);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
