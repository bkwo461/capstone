const express = require('express');
const swaggerFile = require('./middleware/swagger-output.json');
const swaggerUi = require('swagger-ui-express');

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


//Swagger
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile, { explorer: true }));

// Connect to MongoDB
connectMongoDB();

// Link Routes
const cdkRoutes = require('./routes/AWS/cdk');
const registerRoutes = require('./routes/Auth/register');
const loginRoutes = require('./routes/Auth/login');
const authRoutes = require('./routes/Auth/auth.js');
const logoutRoutes = require('./routes/Auth/logout');

// Route Definitions
app.use('/api/cdk', cdkRoutes);
app.use('/api/register', registerRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/logout', logoutRoutes);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
