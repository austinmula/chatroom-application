import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset, fetchrooms } from '../features/chatroom/chatroomSlice';

const SideContent = ({ handleClick }) => {
  const { chatrooms, isLoading, isError, message } = useSelector(
    (state) => state.chatroom
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(fetchrooms());
    console.log('Effect runs');

    return () => {
      dispatch(reset());
    };
  }, [dispatch, isError, message]);

  if (isLoading) {
    return (
      <div className='loader-wrapper'>
        <div className='loader is-loading'></div>
      </div>
    );
  }
  return (
    <>
      <div
        className='column is-2 has-background-grey'
        style={{ height: '100vh', overflow: 'auto' }}
      >
        <div className='has-text-centered py-4 has-background-primary'>
          <p className='title is-6 has-text-white-ter'>My Chat Rooms</p>
        </div>
        <div className='dropdown-divider'></div>

        {chatrooms.length > 0 ? (
          <div className=''>
            {chatrooms.map((chroom) => (
              <div
                key={chroom._id}
                onClick={() => handleClick(chroom._id)}
                style={{ cursor: 'pointer' }}
              >
                <div className='is-flex is-align-items-center'>
                  <p className='image is-32x32 '>
                    <img
                      src='https://bulma.io/images/placeholders/128x128.png'
                      alt='profile'
                      className='is-rounded'
                    />
                  </p>
                  <span className='ml-2 title is-6 has-text-primary-light'>
                    {chroom.name}
                  </span>
                </div>
                {/* <p className='subtitle is-6 has-text-primary-light'>
              {chroom.description}
            </p> */}
                <div className='dropdown-divider'></div>
              </div>
            ))}
          </div>
        ) : (
          <p className='title is-6 has-text-white-ter'>No Chatrooms Here...</p>
        )}
      </div>
    </>
  );
};

export default SideContent;
