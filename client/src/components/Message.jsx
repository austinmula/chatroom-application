import React from 'react';

const data = [1, 2, 3];

const Message = () => {
  return (
    <>
      {data.map(() => (
        <article className='media' style={{ width: '30vw' }}>
          <div className='media-content'>
            <div className='notification is-primary'>
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small>{' '}
                <small>31m</small>
                <br />
                Lorem ipsum dolor sit
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
      ))}
    </>
  );
};

export default Message;
