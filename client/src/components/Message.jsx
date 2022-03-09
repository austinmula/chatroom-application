import React from 'react';
import * as timeago from 'timeago.js';

const Message = ({ msg }) => {
  return (
    <>
      <article className='media' style={{ width: '30vw' }}>
        <div className='media-content'>
          <div className='notification is-primary'>
            <p>
              <strong>@{msg.username}</strong>{' '}
              <small className='ml-3'>{timeago.format(msg.createdAt)}</small>
              <br />
              {msg.content}
            </p>
          </div>
        </div>
        <figure className='media-right'>
          <p className='image is-32x32 '>
            <img
              src='https://bulma.io/images/placeholders/128x128.png'
              alt='profile'
              className='is-rounded'
            />
          </p>
        </figure>
      </article>
    </>
  );
};

export default Message;
