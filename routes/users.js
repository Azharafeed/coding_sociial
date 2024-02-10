var express = require('express');
var router = express.Router();
const userControler = require('../controles/user_controler')
/* GET users listing. */
router.get('/profile', userControler.profile)
router.get('/signup', userControler.signup)
router.get('/signin', userControler.signin)


router.post('/create', userControler.create);
router.post('/create-session', userControler.createSession);
module.exports = router;
