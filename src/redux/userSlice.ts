import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Define the shape of the user state
interface UserState {
  name: string | null;
  email: string | null;
  profilePicture: string | null; // Updated key for consistency
}

// Initial state
const initialState: UserState = {
  name: null,
  email: null,
  profilePicture: null, // Default to null
};

// Create the slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Action to set user information
    setUser: (
      state,
      action: PayloadAction<{
        name: string;
        email: string;
        profilePicture: string;
      }>,
    ) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.profilePicture = action.payload.profilePicture; // Store profile image
    },
    // Action to clear user information
    clearUser: state => {
      state.name = null;
      state.email = null;
      state.profilePicture = null;
    },
  },
});

// Export the actions
export const {setUser, clearUser} = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
