var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var productsRouter = require("./routes/products");
var salesRouter = require("./routes/sales");
var usersRouter = require("./routes/users");
var app = express();
var passport = require("./authMiddleware");

function middlewareIsAdmin(req, res, next) {
  if (req.originalUrl == "/users/login") {
    return next();
  }

  if (req.method == "POST" && (!req.user || !req.user.isAdmin)) {
    return res.sendStatus(401);
  }

  return next();
}


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  require("express-session")({
    secret: "s3ss10n_s3cr3t",
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(middlewareIsAdmin);

app.use("/", usersRouter);
app.use("/", productsRouter);
app.use("/", salesRouter);

module.exports = app;
