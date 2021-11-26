var express = require('express');
var router = express.Router();

const formValidation = require('../validations/formValidation')
const {index, color, logout, destroy} = require('../controller/indexController')

/* GET home page. */
router.get('/', index)
router.post('/', formValidation, color)
router.get('/logout', logout)
router.get('/destroy', destroy)


module.exports = router;