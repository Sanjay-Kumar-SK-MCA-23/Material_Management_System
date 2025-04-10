const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const jwt = require('jsonwebtoken');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error(err));

// ✅ Login Route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

    // Create JWT Token
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
        empID: user.empID,
        email: user.email
      },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      message: 'Login successful',
      token,
      user: {
        empID: user.empID,
        username: user.username,
        role: user.role,
        email: user.email
      }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// ✅ Register Route (includes all fields)
const auth = require('./middlewares/auth');

// ✅ Only Admin can register new users
app.post('/register', auth, async (req, res) => {
  if (req.user.role !== 'Admin') {
    return res.status(403).json({ message: 'Access denied: Only Admins can register users' });
  }

  const {
    empID,
    role,
    username,
    email,
    phoneNumber,
    password,
    dob,
    age,
    address,
    joiningDate,
    department,
    jobRole
  } = req.body;

  try {
    const existingUser = await User.findOne({ $or: [{ empID }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: 'empID or email already exists' });
    }

    const newUser = new User({
      empID,
      role,
      username,
      email,
      phoneNumber,
      password,
      dob,
      age,
      address,
      joiningDate,
      department,
      jobRole
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
