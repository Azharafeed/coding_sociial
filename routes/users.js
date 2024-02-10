var express = require('express');
var router = express.Router();
const passport = require('passport');
const userControler = require('../controles/user_controler')
/* GET users listing. */
router.get('/profile',passport.checkAuthentication, userControler.profile)
router.get('/signup', userControler.signup)
router.get('/signin', userControler.signin)


router.post('/create', userControler.create);
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/signin'},
), userControler.createSession);
module.exports = router;
