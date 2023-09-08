const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const nunjucks = require("nunjucks");
const path = require("path");

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');

nunjucks.configure(['public/'], {  
    autoescape: true,
    express: app
});

const serviceRouter = require('./routes/service');
const homeRouter = require('./routes/home');
const authRouter = require('./routes/auth');


app.use('/', homeRouter);
app.use('/auth', authRouter);
app.use('/service', serviceRouter);


module.exports = app;
