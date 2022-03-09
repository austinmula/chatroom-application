import React from 'react';
import LoginForm from './LoginForm';

const Modal = () => {
  return (
    <div
      className='is-flex is-align-items-center is-justify-content-center'
      style={{ height: '80vh' }}
    >
      <div style={{ width: '500px' }}>
        <LoginForm />
      </div>
    </div>
  );
};

export default Modal;
