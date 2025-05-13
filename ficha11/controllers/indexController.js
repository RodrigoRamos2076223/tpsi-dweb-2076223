const User = require('../db_sequelize').User;
var jwt = require('jsonwebtoken');

exports.signup = function (req, res) {
    var { email, password } = req.body;

    // let user = await User.findOne({where: {email: email}})

    // if(!user){
    //     let res = await User.create({});
    // }

    User.findOne({ where: { email: email } })
        .then(result => {
            if (result == null) {
                User.create(req.body)
                    .then(user => {
                        //var token = generateAcessToken(email, password);
                        //req.session.user = user;
                        //req.session.token = token;
                        res.redirect('/');
                    });
            }
            else {
                req.flash('signupMessage', 'That email already exists');
                res.redirect('/signup');
            }
        }).catch(function (err) {
            req.flash('signupMessage', 'Error: ' + err);
            res.redirect('/signup');
        })
}

exports.login = function (req, res) {
    
    User.findById(req.params.id)
    .then(result => {
        if (result == null){

            res.redirect('/profile')
        }
        else {
            req.flash('loginMessage', 'Email is not valid')
            res.redirect('/login')
        }
    }).catch(function (err) {
        req.flash('loginMessage', 'Error: ' + err);
            res.redirect('/login');
    })
        
}