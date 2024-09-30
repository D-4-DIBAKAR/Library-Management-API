const express = require('express');
const { getAllBooks, searchBooks, getBooksByRent, getBooksByFilter } = require('../controllers/bookController');
const router = express.Router();

router.get('/books', getAllBooks);
router.get('/books/search', searchBooks);
router.get('/books/rent', getBooksByRent);
router.get('/books/filter', getBooksByFilter);

module.exports = router;
