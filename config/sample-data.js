const mongoose = require('mongoose');

// User schema
const userSchema = new mongoose.Schema({
     name: { type: String, required: true },
     email: { type: String, required: true, unique: true },
     password: { type: String, required: true },
     createdAt: { type: Date, default: Date.now }
});
const User = mongoose.model('User', userSchema);

// Book schema
const bookSchema = new mongoose.Schema({
     name: { type: String, required: true },
     category: { type: String, required: true },
     rentPerDay: { type: Number, required: true }
});
const Book = mongoose.model('Book', bookSchema);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/library', {
     useNewUrlParser: true,
     useUnifiedTopology: true
}).then(() => console.log('MongoDB connected!')).catch(err => console.log(err));

// Seed Users
const users = [
     { name: 'Alice Johnson', email: 'alice@example.com', password: 'alice123' },
     { name: 'Bob Smith', email: 'bob@example.com', password: 'bob123' },
     { name: 'Charlie Brown', email: 'charlie@example.com', password: 'charlie123' },
     { name: 'David Williams', email: 'david@example.com', password: 'david123' },
     { name: 'Eva Thompson', email: 'eva@example.com', password: 'eva123' }
];

// Seed Books
const books = [
     { name: 'To Kill a Mockingbird', category: 'Fiction', rentPerDay: 10 },
     { name: '1984', category: 'Dystopian', rentPerDay: 12 },
     { name: 'Moby Dick', category: 'Adventure', rentPerDay: 8 },
     { name: 'The Great Gatsby', category: 'Fiction', rentPerDay: 9 },
     { name: 'Pride and Prejudice', category: 'Romance', rentPerDay: 7 },
     { name: 'The Catcher in the Rye', category: 'Fiction', rentPerDay: 10 },
     { name: 'The Hobbit', category: 'Fantasy', rentPerDay: 11 },
     { name: 'War and Peace', category: 'Historical Fiction', rentPerDay: 15 },
     { name: 'Crime and Punishment', category: 'Psychological Fiction', rentPerDay: 13 },
     { name: 'The Odyssey', category: 'Epic', rentPerDay: 8 },
     { name: 'The Brothers Karamazov', category: 'Philosophical Fiction', rentPerDay: 14 },
     { name: 'Les Misérables', category: 'Historical Fiction', rentPerDay: 12 },
     { name: 'Anna Karenina', category: 'Romance', rentPerDay: 10 },
     { name: 'The Lord of the Rings', category: 'Fantasy', rentPerDay: 15 },
     { name: 'Brave New World', category: 'Dystopian', rentPerDay: 12 },
     { name: 'The Alchemist', category: 'Fiction', rentPerDay: 9 },
     { name: 'Frankenstein', category: 'Science Fiction', rentPerDay: 8 },
     { name: 'Jane Eyre', category: 'Romance', rentPerDay: 7 },
     { name: 'The Divine Comedy', category: 'Epic', rentPerDay: 14 },
     { name: 'Dracula', category: 'Horror', rentPerDay: 10 }
];

// Function to insert data
const seedDatabase = async () => {
     try {
          // Clear existing data
          await User.deleteMany({});
          await Book.deleteMany({});

          // Insert new data
          await User.insertMany(users);
          await Book.insertMany(books);

          console.log('Database seeded successfully!');
          mongoose.connection.close();
     } catch (error) {
          console.error('Error seeding database:', error);
          mongoose.connection.close();
     }
};

// Run seed function
seedDatabase();
