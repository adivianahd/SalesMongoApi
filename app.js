var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var productsRouter = require('./routes/products');
var salesRouter = require('./routes/sales');
var usersRouter = require('./routes/users');
var app = express();
var passport = require("./authMiddleware");


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', usersRouter);
app.use('/', productsRouter);
app.use('/', salesRouter);


module.exports = app;
