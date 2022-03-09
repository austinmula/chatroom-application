import React, { useRef, useEffect } from 'react';
import Message from './Message';
import { useSelector } from 'react-redux';
import SendMsgForm from './SendMsgForm';

const MessageTab = ({ convoId, user }) => {
  const { messages } = useSelector((state) => state.message);
  const scrollRef = useRef();
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      <div>
        {messages.length > 0 ? (
          <div className='p-4' style={{ height: '83vh', overflowY: 'auto' }}>
            {messages.map((msg) => (
              <div ref={scrollRef}>
                <Message
                  key={msg._id}
                  msg={msg}
                  own={msg.sentBy === user.user_id}
                />
              </div>
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
