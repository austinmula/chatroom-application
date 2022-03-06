import 'bulma/css/bulma.min.css';
import React, { useState } from 'react';
import MainContent from './components/MainContent';
import Modal from './components/Modal';
import NavBar from './components/NavBar';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <NavBar setIsOpen={setIsOpen} />
      <div className='container '>
        <MainContent />
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default App;
