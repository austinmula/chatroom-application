import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendmessage } from '../features/messages/messageSlice';

const SendMsgForm = ({ convoId, user, sendToSocket }) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content !== '') {
      const data = {
        content: content,
        chatroomId: convoId,
      };

      //  Send Message to socket server
      const messageData = {
        content: content,
        chatroomId: convoId,
        sentBy: user.user_id,
        username: user.name,
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
      };

      sendToSocket(messageData);

      // now send to server
      dispatch(sendmessage(data));
      setContent('');
    }
  };

  return (
    <div className='has-background-grey-lighter px-3'>
      <form onSubmit={handleSubmit}>
        <div className='columns mt-3'>
          <div className='column is-four-fifths'>
            <textarea
              className='textarea is-link'
              rows={2}
              name='content'
              type='text'
              value={content}
              placeholder='Enter Message'
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className='column is-one-fifth'>
            <button type='submit' className={`button is-primary `}>
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SendMsgForm;
