import express from 'express';
import { signup, signin } from '../controllers/auth.controller.js';

const router = express.Router();

// Routes
router.post('/signup', signup); // Signup route
router.post('/signin', signin); // Signin route

export default router;