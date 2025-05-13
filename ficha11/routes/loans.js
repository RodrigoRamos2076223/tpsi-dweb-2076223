var express = require('express');
var router = express.Router();
var loansController = require('../controllers/loansController');

router.get('/', loansController.getAllLoans);
router.get('/:id', loansController.getLoanById);
router.post('/', loansController.createLoan);
router.delete('/', loansController.deleteLoan);
router.put('/', loansController.updateLoan);

module.exports = router;