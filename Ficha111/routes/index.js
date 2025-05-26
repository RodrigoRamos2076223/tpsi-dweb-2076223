var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');
const auth = require("../utils/auth");

router.post('/signup', indexController.signup);
router.post('/login', indexController.login);

module.exports = router;
