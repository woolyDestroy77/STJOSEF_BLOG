import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'

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

const PORT = process.env.PORT || 3001;

// Route for /test path only
app.use('/api/user', userRoutes)

// 404 handler for all other routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
