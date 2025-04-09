const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
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

    res.json({ message: 'Login successful', user: {
      empID: user.empID,
      username: user.username,
      role: user.role,
      email: user.email
    }});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// ✅ Register Route (includes all fields)
app.post('/register', async (req, res) => {
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
      return res.status(400).json({ message: 'Username or email already exists' });
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
