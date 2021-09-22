var express = require('express');
var router = express.Router();

const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../db/models');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('app', { title: 'Home Page' });
});

module.exports = router;
