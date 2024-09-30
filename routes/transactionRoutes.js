const express = require('express');
const { issueBook, returnBook } = require('../controllers/transactionController');
const router = express.Router();

router.post('/transactions/issue', issueBook);
router.post('/transactions/return', returnBook);

module.exports = router;
