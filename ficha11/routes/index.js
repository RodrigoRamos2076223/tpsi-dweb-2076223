var express = require('express');
var jwt = require('jsonwebtoken')
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res) {
  res.render('login', { message: req.flash('loginMessage') });
});

router.get('/signup', function(req, res) {
  res.render('signup', { message: req.flash('signupMessage') });
});

router.post('/signup', indexController.signup)
router.post('/login', indexController.login)

module.exports = router;
