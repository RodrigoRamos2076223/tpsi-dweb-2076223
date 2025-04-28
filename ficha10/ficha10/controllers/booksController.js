const Book = require('../sequilize').Book;

exports.getAllBook = function (request, response, next) {
    Book.findAll()
    .then(books => {
        response.render('book', {title: 'Books', data: books})
    });
};