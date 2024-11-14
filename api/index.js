import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('MONGODB IS CONNECTED!');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB:', err);
  });

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get('/test', (req, res) => {
  res.send('Welcome to the API!');
});

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Initial Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  })
})