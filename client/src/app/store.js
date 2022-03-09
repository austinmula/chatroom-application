import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import chatroomReducer from '../features/chatroom/chatroomSlice';
import messageReducer from '../features/messages/messageSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    chatroom: chatroomReducer,
    message: messageReducer,
  },
});
