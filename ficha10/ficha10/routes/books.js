var express = require('express');
var router = express.Router();
var booksController = require('../controllers/booksController');

router.get('/', booksController.getAllBooks);
router.get('/:id', booksController.getBookById);
router.post('/', booksController.createBook);
router.delete('/', booksController.deleteBook);
router.put('/', booksController.updateBook);

module.exports = router;