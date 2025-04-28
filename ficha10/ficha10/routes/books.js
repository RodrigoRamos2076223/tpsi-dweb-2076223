var express = require('express');
var router = express.Router();
var booksController = require('../controllers/booksController');

router.get('/', booksController.getAllBook);

  module.exports = router;