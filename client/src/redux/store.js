import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/userSlice'; // Adjust path accordingly
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist'; // Correct import

const rootReducer = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

// Correct usage of persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV !== 'production', // Enables dev tools in development mode
});

export const persistor = persistStore(store); // Export persistor
export default store; // Export store as default