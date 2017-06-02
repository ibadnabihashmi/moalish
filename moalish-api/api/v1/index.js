var express = require('express');
var router      = express.Router();
var user = require('./user/index');
var auth = require('./auth/index');

router.use('/user',user);
router.use('/auth',auth);

module.exports = router;