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

app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

app.get('/about', (req, res) => {
  res.send('This is the About Page');
});

// Use the auth routes for `/api/auth`
app.use('/api/auth', authRoutes);

// Use the user routes for `/api/user`
app.use('/api/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});