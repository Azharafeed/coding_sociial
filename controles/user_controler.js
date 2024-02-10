const User = require('../models/user')


module.exports.profile = function(req,res){
    return res.render('profile')
}
module.exports.signup = function(req,res){
    return res.render('signup')
}
module.exports.signin = function(req,res){
    return res.render('signin')
}


module.exports.create = function(req, res){
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email})
        .then(user => {
            if (!user) {
                return User.create(req.body);
            } else {
                return Promise.reject('User already exists');
            }
        })
        .then(newUser => {
            return res.redirect('/users/signin');
        })
        .catch(err => {
            console.error('Error in creating user:', err);
            return res.redirect('back');
        });
}


module.exports.createSession = function(req, res){
    return res.redirect('/');
}
