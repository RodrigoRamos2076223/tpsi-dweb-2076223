var express = require('express');
var router = express.Router();
var loansController = require('../controllers/loansController');

router.get('/', loanssController.getAllLoan);
  
  module.exports = router;