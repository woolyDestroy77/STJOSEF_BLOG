import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB is connected'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Define User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Create User Model
const User = mongoose.model('User', userSchema);

// Routes
app.post('/api/auth/signup', async (req, res) => {
  const { username, email, password } = req.body;

  // Validation
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Save user to MongoDB
    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start server
const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));