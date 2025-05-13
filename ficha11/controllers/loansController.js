const Loan = require('../db_sequelize').Loan;
const user = require('../controllers/usersController')
const book = require('../controllers/booksController')


async function getAllLoans(req, res, next){
    var loans = await Loan.findAll();
    res.send(loans);
};

// async function getAllLoansFull(req, res, next){
//     var loans = await Loan.findAll({include: [{model: user}, {model : book}]})
//     res.send(loans);
// };

async function getLoanById(req, res){
    var loan = await Loan.findByPk(req.params.id)
    res.send(loan)
};

async function createLoan(req, res){
    var newLoan = await Loan.create({
        user_id: req.body.user_id,
            book_id: req.body.book_id,
            loan_date: req.body.loan_date,
            return_date: req.body.return_date
    })
    res.send(newLoan)
};

async function deleteLoan(req, res){
    var loan = await Loan.findByPk(req.params.id)
    await Loan.destroy(loan)
};


async function updateLoan(req, res){
    var loan = await Loan.findByPk(req.params.id)
    await Loan.update({
        user_id: req.body.user_id,
            book_id: req.body.book_id,
            loan_date: req.body.loan_date,
            return_date: req.body.return_date
    })
    res.send(loan)
};

module.exports = {
    getAllLoans,
    // getAllLoansFull,
    getLoanById,
    createLoan,
    deleteLoan,
    updateLoan
};