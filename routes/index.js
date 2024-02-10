var express = require('express');
var router = express.Router();
const homeControlr = require('../controles/home_controlr')
/* GET home page. */
router.get('/', homeControlr.home)
router.use('/users', require('./users'))
module.exports = router;
