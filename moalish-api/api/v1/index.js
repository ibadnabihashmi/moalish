var express = require('express');
var router      = express.Router();
var user = require('./user/index');

router.use('/user',user);

module.exports = router;