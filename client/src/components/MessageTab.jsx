import React, { useRef, useEffect, useState } from 'react';
import Message from './Message';
import { useSelector, useDispatch } from 'react-redux';
import SendMsgForm from './SendMsgForm';
import io from 'socket.io-client';
import { appendMessage } from '../features/messages/messageSlice';

const MessageTab = ({ convoId, user }) => {
  const socket = useRef();
  const dispatch = useDispatch();
  const { messages } = useSelector((state) => state.message);
  // const [newMessage, setnewMessage] = useState({})
  const scrollRef = useRef();

  useEffect(() => {
    socket.current = io('ws://localhost:3001');
    // pass data to socket of room id
    socket.current.emit('joinroom', convoId);
  }, [convoId]);

  useEffect(() => {
    socket.current.on('receivemessage', (data) => {
      console.log(data);
      dispatch(appendMessage(data));
    });
    //console.log('use Effect sck connection');
  }, [socket, dispatch]);

  // Handle Smooth scrolling
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendToSocket = async (data) => {
    await socket.current.emit('sendmessage', data);
  };

  return (
    <>
      <div>
        {messages.length > 0 ? (
          <div className='p-4' style={{ maxHeight: '83vh', overflowY: 'auto' }}>
            {messages.map((msg) => (
              <div ref={scrollRef} key={msg._id}>
                <Message msg={msg} own={msg.sentBy === user.user_id} />
              </div>
            ))}
          </div>
        ) : (
          <p>No messages in this chatroom</p>
        )}
      </div>
      <SendMsgForm convoId={convoId} user={user} sendToSocket={sendToSocket} />
    </>
  );
};

export default MessageTab;
