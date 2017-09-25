var express = require('express');
var router = express.Router();
var path = require('path');
var index = require('./index');

var Lists = require(path.resolve(path.dirname(__dirname), 'modules/lists'));
var Cards = require(path.resolve(path.dirname(__dirname), 'modules/cards'));

/* GET home page. */
router.get('/', index.route);

module.exports = router;
