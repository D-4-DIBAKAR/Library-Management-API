const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
     book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
     user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
     issueDate: { type: Date, required: true },
     returnDate: { type: Date },
     rent: { type: Number }
});

module.exports = mongoose.model('Transaction', transactionSchema);