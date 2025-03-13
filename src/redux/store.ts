// src/redux/store.ts
import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Import the userReducer
import playsReducer from './playsSlice';

const store = configureStore({
  reducer: {
    user: userReducer, // Use the imported userReducer
    plays: playsReducer,
  },
});

export default store;

// Define the RootState type
export type RootState = ReturnType<typeof store.getState>;
