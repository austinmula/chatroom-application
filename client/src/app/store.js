import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import chatroomReducer from '../features/chatroom/chatroomSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    chatroom: chatroomReducer,
  },
});
