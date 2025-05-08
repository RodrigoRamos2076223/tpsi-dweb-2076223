const User = require('../db_sequelize').User

async function getAllUsers(req, res){
    var users = await User.findAll();
    res.send(users);
}

async function getUserById(req, res){
    const user = await User.findByIdd(req.params.id);
    res.send(user);
}

async function createUser(req, res){
    const newUser = await User.create(req.body);
    res.send(newUser)
}

async function deleteUser(req, res){
    const user = await User.findByIdd(req.params.id);
    await user.destroy();
}

async function updateUser(req, res){
    const user = await User.findByIdd(req.params.id);
    await user.update(req.body);
    res.send(user)
}


module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
}