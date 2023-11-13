const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Create a new user
router.post('/create-user', userController.createUser);

// User login
router.post('/login', userController.userLogin);

module.exports = router;
