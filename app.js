const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

// Load environment variables from .env
dotenv.config();
// Import the database connection function
const connectDB = require('./config/db');

// Importing routes
const bookRoutes = require('./routes/bookRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
//CORS
app.use(cors());

// Connect to MongoDB
connectDB();

// Middleware for parsing JSON data
app.use(bodyParser.json());

// Use Routes
app.use('/api', bookRoutes);
app.use('/api', transactionRoutes);
app.use('/api', userRoutes);

// Export the Express app
module.exports = app;
