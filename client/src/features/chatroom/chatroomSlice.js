import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import chatroomService from './chatroomService';

const initialState = {
  chatrooms: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
};

// Fetch chatrooms
export const fetchRooms = createAsyncThunk(
  'users/chatrooms',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState.auth.user.token;
      return await chatroomService.getRooms(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const chatroomSlice = createSlice({
  name: 'chatrooms', // this is the name of our slice
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  //   extraReducers: {
  //     [login.pending]: (state) => {
  //       state.isLoading = true;
  //     },
  //     [login.fulfilled]: (state, action) => {
  //       state.isLoading = false;
  //       state.isSuccess = true;
  //       state.user = action.payload;
  //     },
  //     [login.rejected]: (state, action) => {
  //       state.isLoading = false;
  //       state.isError = true;
  //       state.message = action.payload;
  //       state.user = null;
  //     },
  //     [logout.fulfilled]: (state) => {
  //       state.user = null;
  //     },
  //   },
});

export const { reset } = chatroomSlice.actions;
export default chatroomSlice.reducer;
