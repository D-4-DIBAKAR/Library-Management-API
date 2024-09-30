const Book = require('../models/bookModel');

// Get all books
exports.getAllBooks = async (req, res) => {
     try {
          const books = await Book.find();
          res.json(books);
     } catch (error) {
          res.status(500).json({ message: 'Error fetching books', error: error.message });
     }
};

// Search books by name or term
exports.searchBooks = async (req, res) => {
     try {
          const { name } = req.query;
          const books = await Book.find({ name: { $regex: name, $options: 'i' } });
          res.json(books);
     } catch (error) {
          res.status(500).json({ message: 'Error searching for books', error: error.message });
     }
};

// Get books by rent range
exports.getBooksByRent = async (req, res) => {
     try {
          const { minRent, maxRent } = req.query;
          const books = await Book.find({ rentPerDay: { $gte: minRent, $lte: maxRent } });
          res.json(books);
     } catch (error) {
          res.status(500).json({ message: 'Error fetching books by rent range', error: error.message });
     }
};

// Get books by category, name/term, and rent range
exports.getBooksByFilter = async (req, res) => {
     try {
          const { category, name, minRent, maxRent } = req.query;
          const books = await Book.find({
               category,
               name: { $regex: name, $options: 'i' },
               rentPerDay: { $gte: minRent, $lte: maxRent }
          });
          res.json(books);
     } catch (error) {
          res.status(500).json({ message: 'Error filtering books', error: error.message });
     }
};
