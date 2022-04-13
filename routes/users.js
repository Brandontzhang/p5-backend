var express = require('express');
const { getUsers } = require('../services/user.service');
var router = express.Router({ mergeParams: true });

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  getUsers();
});

module.exports = router;
