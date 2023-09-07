const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const cookieParser = require("cookie-parser");

const connectMongoDB = require("./config/db.js");

require("dotenv").config();

app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Swagger Initialization
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Cloud Engine API",
            version: "0.0.1",
            description: "Welcome to Cloud Engine Backend API",
        },
    },
    apis: ["./server.js", "./routes/*.js", "./routes/AWS/*.js"],
};

swaggerDocs = swaggerJsDoc(swaggerOptions);

// Swagger Routes
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.get("/swagger.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerDocs);
});

/**
 * @swagger
 * /:
 *  get:
 *    description: Sample endpoint to test if the server is running
 *    responses:
 *      '200':
 *        description: A successful response
 *
 */
app.get("/", (req, res) => {
    console.log("Hello World");
    res.status(200).send("Hello World");
    // res.status(200).json({"message": "Hello World"}); // Send in JSON format
});

// Connect to MongoDB
connectMongoDB();

// Link Routes
const cdkRoutes = require("./routes/AWS/cdk");
const registerRoutes = require("./routes/register");
const loginRoutes = require("./routes/login");
const authRoutes = require("./routes/auth");
const logoutRoutes = require("./routes/logout");
const otpRoutes = require("./routes/otp");
const validatedOtpRoutes = require("./routes/validate_otp");
const serviceRoutes = require("./routes/services/service");
const profileRoutes = require("./routes/profile");

// Route Definitions
app.use("/api/cdk", cdkRoutes);
app.use("/api/register", registerRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/logout", logoutRoutes);
app.use("/api/otp", otpRoutes);
app.use("/api/validate_otp", validatedOtpRoutes);
app.use("/api/service", serviceRoutes);
app.use("/api/profile", profileRoutes);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
