const Loan = require('../sequilize').Loan;

exports.getAllBook = function (request, response, next) {
    Loan.findAll()
    .then(loans => {
        response.render('loan', {title: 'Loans', data: loans})
    });
};