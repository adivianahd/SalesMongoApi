var express = require('express');
var router = express.Router();

const bcrypt = require('bcrypt-nodejs')
const UserController = require('../controllers/UserController')
const UserService = require('../services/UserService')
const UserInstance = new UserController(new UserService())


router.get('/users', (req, res) => {
  UserInstance.getUsers(req, res);
});

router.post('/users', (req, res) => {
  UserInstance.save(req, res);
});

router.get('/users/:id', (req, res) => {
  UserInstance.getUsersById(req, res);
});

router.get('/users/:handler', (req, res) => {
  UserInstance.UserHandler(req, res);
});

router.get('/password', (req, res) => {
  const password = 123

  const hashedPassword = bcrypt.hashSync(password)

  return res.json(
    password,
    hashedPassword
  )
});

router.put('/users/:id', (req, res) => {
  UserInstance.update(req, res);
});

module.exports = router;
