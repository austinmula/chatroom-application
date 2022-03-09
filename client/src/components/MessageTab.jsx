import React from 'react';
import Message from './Message';
import { useSelector } from 'react-redux';
import SendMsgForm from './SendMsgForm';

const MessageTab = ({ convoId }) => {
  const { messages } = useSelector((state) => state.message);
  return (
    <>
      <div>
        {messages.length > 0 ? (
          <div
            className='box has-background-white-ter'
            style={{ height: '59vh', overflow: 'auto' }}
          >
            {messages.map((msg) => (
              <Message key={msg._id} msg={msg} />
            ))}
          </div>
        ) : (
          <p>No messages in this chatroom</p>
        )}
      </div>
      <SendMsgForm convoId={convoId} />
    </>
  );
};

export default MessageTab;
