require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const user = require('./models/user'); // Assuming the user model is defined

const app = express();
app.set('view engine', 'ejs');

// Use CORS for allowing requests from your frontend
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend URL
  credentials: true
}));  

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Register User Route
app.post('/register', async (req, res) => {
  try {
    const { name, password, number } = req.body;

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user in the database
    const createdUser = await user.create({
      name,
      number,
      password: hashedPassword,
    });

    // Generate JWT token
    const token = jwt.sign({ number, name }, process.env.JWT_SECRET || 'shhh', { expiresIn: '1h' });

    // Send token as cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Secure flag for production (HTTPS)
      sameSite: 'Lax',
    });

    res.json({ success: true, createdUser, token });
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

// Login User Route
app.post('/login', async (req, res) => {
  const { number, password } = req.body;
  console.log(number, password, 'fff');
  
  function normalizePhoneNumber(number) {
    return number.replace(/\D/g, ''); // Remove non-digit characters
  }

  function isAdminPhoneNumber(number) {
    const adminNumber = '23456789'; // Admin number (You can customize this as needed)
    return number === adminNumber;
  }

  const normalizedNumber = normalizePhoneNumber(number);

  try {
    const findUser = await user.findOne({ number: normalizedNumber });
    
    if (!findUser) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, findUser.password);

    if (isMatch) {
      const token = jwt.sign({ number: findUser.number, name: findUser.name }, process.env.JWT_SECRET || 'shhh', { expiresIn: '1h' });
      res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Set secure flag in production
        sameSite: 'Lax',
      });

      const isAdmin = isAdminPhoneNumber(normalizedNumber);
      res.json({
        success: true,
        token,
        number: `+${findUser.number}`,
        userType: isAdmin ? 'admin' : 'user',
        maxAge: 3600000,
      });
    } else {
      res.json({ success: false, message: 'Invalid password' });
    }
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

// Middleware to check if user is admin
const isAdmin = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ success: false, message: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'shhh');
    const findUser = await user.findOne({ number: decoded.number });

    if (!findUser || !isAdminPhoneNumber(findUser.number)) {
      return res.status(403).json({ success: false, message: 'Access denied' });
    }

    next();
  } catch (error) {
    console.error('Admin check failed:', error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Admin route
app.get('/admin', isAdmin, (req, res) => {
  res.json({ success: true, message: 'Admin access granted' });
});

// Middleware to check if user is logged in
const isLoggedIn = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.redirect('/login');
    }

    const data = jwt.verify(token, process.env.JWT_SECRET || 'shhh');
    req.user = data;
    next();
  } catch (error) {
    console.error('JWT verification failed:', error);
    return res.redirect('/login');
  }
};

// Profile route
app.get('/profile', isLoggedIn, (req, res) => {
  res.json({ success: true, message: 'User is authenticated' });
});

// Logout route
app.post('/logout', (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'Lax'
  });

  res.status(200).json({ message: 'Logout successful' });
});

// Start the server
const PORT = process.env.PORT || 8989;
app.listen(PORT,`0.0.0.0`,() => {
  console.log(`Server is running on port ${PORT}`);
});
