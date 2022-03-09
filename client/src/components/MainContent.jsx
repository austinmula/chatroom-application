import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchmessages } from '../features/messages/messageSlice';
import MessageTab from './MessageTab';
import SideContent from './SideContent';

const MainContent = () => {
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
    <section className='section mt-3 has-background-grey-lighter'>
      <div className='columns'>
        <SideContent handleClick={handleClick} />
        <div className='column is-9 is-fullheight'>
          {showTab && <MessageTab convoId={convoId} />}
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default MainContent;
