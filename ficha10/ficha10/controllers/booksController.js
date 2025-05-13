const Book = require('../db_sequelize').Book;

async function getAllBooks(req, res){
    var books = await Book.findAll();
    res.send(books);

};

async function getBookById(req, res){
    var book = await Book.findByPk(req.params.id)
    res.send(book)
};

async function createBook(req, res){
    var newBook = await Book.create({
        title: req.body.title,
            author_name: req.body.author_name,
            publication_date: req.body.publication_date,
            genre: req.body.genre,
            available_copies: req.body.available_copies 
    })
    res.send(newBook)
};

async function deleteBook(req, res){
    var book = await Book.findByPk(req.params.id)
    await Book.destroy(book)
};


async function updateBook(req, res){
    var book = await Book.findByPk(req.params.id)
    await Book.update({
        title: req.body.title,
            author_name: req.body.author_name,
            publication_date: req.body.publication_date,
            genre: req.body.genre,
            available_copies: req.body.available_copies 
    })
    res.send(book)
};

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    deleteBook,
    updateBook
};