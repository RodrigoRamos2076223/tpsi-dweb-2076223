var express = require('express');
var router = express.Router();
var userController = require('../controllers/userControllers')

router.get('/', usersController.getAllUser);

module.exports = router;
