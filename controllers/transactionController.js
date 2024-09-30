const Transaction = require('../models/transactionModel');
const Book = require('../models/bookModel');
const User = require('../models/userModel');

// Issue a book
exports.issueBook = async (req, res) => {
     const { bookName, userId, issueDate } = req.body;

     const book = await Book.findOne({ name: bookName });
     const user = await User.findById(userId);

     if (!book || !user) {
          return res.status(404).json({ message: 'Book or User not found' });
     }

     const transaction = new Transaction({
          book: book._id,
          user: user._id,
          issueDate,
     });

     await transaction.save();
     res.status(201).json(transaction);
};

// Return a book and calculate rent
exports.returnBook = async (req, res) => {
     const { bookName, userId, returnDate } = req.body;

     const book = await Book.findOne({ name: bookName });
     const transaction = await Transaction.findOne({ book: book._id, user: userId, returnDate: null });

     if (!transaction) {
          return res.status(404).json({ message: 'No active transaction found' });
     }

     const issueDate = new Date(transaction.issueDate);
     const rentDays = Math.ceil((new Date(returnDate) - issueDate) / (1000 * 60 * 60 * 24));
     const rent = rentDays * book.rentPerDay;

     transaction.returnDate = returnDate;
     transaction.rent = rent;

     await transaction.save();
     res.status(200).json({ message: 'Book returned', rent });
};
