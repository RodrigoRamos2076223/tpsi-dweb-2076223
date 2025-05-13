const User = require('../db_sequelize').User

async function getAllUsers(req, res){
    var users = await User.findAll();
    res.send(users)
};

async function getUserById(req, res){
    var user = await User.findByPk(req.params.id)
    res.send(user)
};

async function createUser(req, res){
    var newUser = await User.create({
        first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            address: req.body.address,
            phone_number: req.body.phone_number 
    })
    res.send(newUser)
};

async function deleteUser(req, res){
    var user = await User.findByPk(req.params.id)
    await User.destroy(user)
};


async function updateUser(req, res){
    var user = await User.findByPk(req.params.id)
    await User.update({
        first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            address: req.body.address,
            phone_number: req.body.phone_number 
    })
    res.send(user)
};


module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
};