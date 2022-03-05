import React from 'react';
import Message from './Message';

const data = [
  'Chatroom one',
  'Chatroom two',
  'Chatroom three',
  'Chatroom four',
  'Chatroom five',
  'Chatroom Six',
  'Chatroom Seven',
];

const MainContent = () => {
  return (
    <section className='is-success '>
      <div className='columns'>
        <div
          className='column is-3'
          style={{ height: '90vh', overflow: 'auto' }}
        >
          <div className='box has-text-centered mt-3 has-background-primary'>
            <p className='title is-6 has-text-white-ter'>
              Available Chat Rooms
            </p>
          </div>
          <div className='dropdown-divider'></div>

          {data.map((i) => (
            <>
              <p className='title is-6 has-text-primary-dark'>{i}</p>
              <p className='subtitle is-6'>Chatroom Description.</p>
              <div className='dropdown-divider'></div>
            </>
          ))}
        </div>

        <div className='column is-9 is-fullheight'>
          <div
            className='box mt-3 has-background-grey-lighter'
            style={{ height: '70vh', overflow: 'auto' }}
          >
            <Message />
          </div>

          <div>
            <article className='media'>
              <div className='media-content'>
                <div className='field'>
                  <p className='control'>
                    <textarea
                      className='textarea is-success'
                      placeholder='Type Message Here...'
                      rows={2}
                    ></textarea>
                  </p>
                </div>
              </div>
              <div className='media-right'>
                <div className='level-item'>
                  <button className='button is-info'>Submit</button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default MainContent;
