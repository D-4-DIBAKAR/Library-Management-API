const express = require('express');
const { getAllUsers, createUser, getUserById, loginUser } = require('../controllers/userController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/users', auth, getAllUsers);
router.post('/users', createUser);
router.get('/users/:id', auth, getUserById);
router.post('/users/login', loginUser);

module.exports = router;
