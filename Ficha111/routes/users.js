var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');

router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getUserById);
router.post('/', usersController.createUser);
router.delete('/', usersController.deleteUser);
router.put('/', usersController.updateUser);

module.exports = router;
