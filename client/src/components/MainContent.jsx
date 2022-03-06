import React from 'react';
import Message from './Message';

const data = [
  'Chatroom one',
  'Chatroom two',
  'Chatroom three',
  'Chatroom four',
  // 'Chatroom five',
  // 'Chatroom Six',
  // 'Chatroom Seven',
];

const MainContent = () => {
  return (
    <section className='section mt-3 has-background-grey-lighter'>
      <div className='columns'>
        <div
          className='column is-3 has-background-grey'
          style={{ height: '72vh', overflow: 'auto' }}
        >
          <div className='has-text-centered py-4 has-background-primary'>
            <p className='title is-6 has-text-white-ter'>My Chat Rooms</p>
          </div>
          <div className='dropdown-divider'></div>

          {data.map((i) => (
            <>
              <p className='title is-6 has-text-primary-light'>{i}</p>
              <p className='subtitle is-6 has-text-primary-light'>
                Chatroom Description.
              </p>
              <div className='dropdown-divider'></div>
            </>
          ))}
        </div>

        <div className='column is-9 is-fullheight'>
          <div
            className='box has-background-white-ter'
            style={{ height: '59vh', overflow: 'auto' }}
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
                      rows={1}
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
