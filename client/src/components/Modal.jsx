import React from 'react';
import LoginForm from './LoginForm';

const Modal = ({ isOpen, setIsOpen }) => {
  return (
    <div className={isOpen ? 'is-active modal' : 'modal'}>
      <div className='modal-background'></div>
      <div className='modal-content'>
        {/* <!-- Any other Bulma elements you want --> */}
        <LoginForm setIsOpen={setIsOpen} />
      </div>

      <button
        className='modal-close is-large'
        aria-label='close'
        onClick={() => setIsOpen(false)}
      ></button>
    </div>
  );
};

export default Modal;
