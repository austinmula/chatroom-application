import React from 'react';
import * as timeago from 'timeago.js';

const Message = ({ msg, own }) => {
  return (
    <div className={`is-flex ${own ? 'is-justify-content-end' : null}`}>
      <article className='media mb-4' style={{ width: '380px' }}>
        <div className='media-content'>
          <div className={`notification  ${own ? 'is-dark' : 'is-success'}`}>
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
    </div>
  );
};

export default Message;
