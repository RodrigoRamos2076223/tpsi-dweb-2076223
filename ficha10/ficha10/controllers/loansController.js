const Loan = require('../db_sequelize').Loan;

async function getAllLoans(req, res, next){
    var loans = await Loan.findAll();
    res.send(loans);
}

async function getAllLoansFull(req, res, next){
    var loans = await Loan.findAll({include: [{model: user}, {model : Book}]})
    res.send(loans);
};

module.exports = {
    getAllLoans,
    getAllLoansFull
}