const Book = require('../db_sequelize').Book;

async function getAllBooks(req, res){
    var books = await Book.findAll();
    res.send(books);

};

module.exports = {
    getAllBooks
}