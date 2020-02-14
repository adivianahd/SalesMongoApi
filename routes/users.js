var express = require("express");
var router = express.Router();

const UserController = require("../controllers/UserController");
const UserService = require("../services/UserService");
const UserInstance = new UserController(new UserService());
const bcrypt = require("bcrypt-nodejs");

const passport = require("../authMiddleware");

router.post("/users/login", passport.authenticate("local"), function (req, res) {
  return res.json(req.user);
});



router.get("/password", (req, res) => {
  const password = 123;

  const hashedPassword = bcrypt.hashSync(password);

  return res.json(
    password,
    hashedPassword
  );
});

router.get("/password/:id", (req, res) => {
  const password = "123";
  const hashedPassword = bcrypt.hashSync(password);
  const id = req.params.id;

  const compare = bcrypt.compareSync(id, hashedPassword);

  return res.send(compare);

});

router.get("/users", (req, res) => {
  UserInstance.getUsers(req, res);
});

router.post("/users", (req, res) => {
  UserInstance.addUser(req, res);
});

router.get("/users/:id", (req, res) => {
  UserInstance.getUsersById(req, res);
});

router.get("/users/:handler", (req, res) => {
  UserInstance.UserHandler(req, res);
});

router.put("/users/:id", (req, res) => {
  UserInstance.update(req, res);
});

module.exports = router;
