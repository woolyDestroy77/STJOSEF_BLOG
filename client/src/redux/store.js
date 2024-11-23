// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice'; // Adjust path accordingly

const store = configureStore({
  reducer: {
    user: userReducer, // Add your reducer here
  },
  devTools: process.env.NODE_ENV !== 'production', // Enables dev tools in development mode
});

export default store; // Export store as default