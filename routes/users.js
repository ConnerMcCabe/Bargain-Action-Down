const express = require('express');
const router = express.Router();
const User = require('../models/users');
const usersCtrl = require('../controllers/users');

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);
router.post('/updateAction/:id', usersCtrl.updateAct);
router.get('/user/:id', usersCtrl.findUser)

/*---------- Protected Routes ----------*/


module.exports = router;