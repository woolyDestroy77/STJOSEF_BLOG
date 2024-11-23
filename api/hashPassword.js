import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

// MongoDB Connection
mongoose
  .connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB is connected'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

const User = mongoose.model('User', new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}));

// Hash password and update it in the database
async function hashPassword() {
  try {
    const user = await User.findOne({ email: 'youssef.arafat09@gmail.com' });
    if (!user) {
      console.log('User not found');
      return;
    }

    // Hash the password
    const hashedPassword = await bcryptjs.hash('youssef123', 10);
    user.password = hashedPassword;

    // Save the updated user
    await user.save();
    console.log('Password updated successfully');
  } catch (error) {
    console.error('Error updating password:', error);
  }
}

hashPassword();
