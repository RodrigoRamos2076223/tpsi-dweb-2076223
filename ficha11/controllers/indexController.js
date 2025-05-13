const Book = require('../db_sequelize').User;
var jwt = require('jsonwebtoken');

exports.signup = function (req, res) {
    var { email, password } = req.body;

    // let user = await User.findOne({where: {email: email}})

    // if(!user){
    //     let res = await User.create({});
    // }

    User.findOne({where: {email: email}}).then(result => {
        if (result == null) {
            User.create({ 'email': email, 'password': password })
                .then(user => {
                    //var token = generateAcessToken(email, password);
                    //req.session.user = user;
                    //req.session.token = token;
                    res.redirect('/profile');
                });
        }
        else {
            req.flash('signupMessage', 'That email already exists');
            res.redirect('/signup');
        }
    }).catch(function (err){
        req.flash('signupMessage', 'Error: ' + err);
        res.redirect('/signup');
})

exports.login = function (req, res) {

}}