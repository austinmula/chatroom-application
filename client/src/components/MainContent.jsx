import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchmessages } from '../features/messages/messageSlice';
import MessageTab from './MessageTab';
import SideContent from './SideContent';

const MainContent = ({ user }) => {
  const dispatch = useDispatch();
  const [showTab, setShowTab] = useState(false);
  const [convoId, setConvoId] = useState('');
  useEffect(() => {}, []);

  const handleClick = (id) => {
    setShowTab(true);
    setConvoId(id);
    dispatch(fetchmessages(id));
  };

  return (
    <section
      className='has-background-grey-light'
      style={{ maxHeight: '100vh' }}
    >
      <div className='columns is-gapless'>
        <SideContent handleClick={handleClick} />
        <div
          className='column is-7 has-background-white-ter'
          style={{ height: '100vh' }}
        >
          {showTab && <MessageTab convoId={convoId} user={user} />}
        </div>
        <div className='column is-3 has-background-grey-light'></div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default MainContent;
