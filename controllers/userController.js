const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Get all users
exports.getAllUsers = async (req, res) => {
     try {
          const users = await User.find();
          res.json(users);
     } catch (error) {
          res.status(500).json({ message: 'Error fetching users' });
     }
};

// Create a new user (Registration)
exports.createUser = async (req, res) => {
     const { name, email, password } = req.body;

     try {
          // Check if user already exists
          const existingUser = await User.findOne({ email });
          if (existingUser) {
               return res.status(400).json({ message: 'User already exists' });
          }

          // Hash the password
          const hashedPassword = await bcrypt.hash(password, 10);

          const user = new User({
               name,
               email,
               password: hashedPassword
          });

          await user.save();

          // Create a token
          const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

          res.status(201).json({ message: 'User created successfully', user, token });
     } catch (error) {
          res.status(500).json({ message: 'Error creating user' });
     }
};

// User login
exports.loginUser = async (req, res) => {
     const { email, password } = req.body;

     try {
          const user = await User.findOne({ email });
          if (!user) return res.status(404).json({ message: 'User not found' });

          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

          // Create JWT token
          const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

          res.json({ message: 'Login successful', user, token });
     } catch (error) {
          res.status(500).json({ message: 'Error logging in' });
     }
};

// Get user by ID
exports.getUserById = async (req, res) => {
     const { id } = req.params;

     try {
          const user = await User.findById(id);
          if (!user) return res.status(404).json({ message: 'User not found' });

          res.json(user);
     } catch (error) {
          res.status(500).json({ message: 'Error fetching user' });
     }
};
