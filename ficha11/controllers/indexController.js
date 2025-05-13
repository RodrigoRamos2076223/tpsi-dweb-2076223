const Book = require('../db_sequelize').User;
var jwt = require('jsonwebtoken');

exports.signup = function (req, res) {
    var { email, password } = req.body;

    // let user = await User.findOne({where: {email: email}})

    // if(!user){
    //     let res = await User.create({});
    // }

    User.findOne({
        where: {
            email: email
        }
    }).then(result => {
        if (result == null) {

            User.create({ 'email': email, 'password': password })
                .then(user => {})
        }
    }
    )
}

exports.login = function (req, res) {

}