import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { login, reset } from '../features/auth/authSlice';

const LoginForm = ({ setIsOpen }) => {
  const [data, setData] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    //Create an object for the current input field
    const currentInputFieldData = {
      [name]: value,
    };

    //Merge the data object with the current input field data object
    const updatedData = {
      ...data,
      ...currentInputFieldData,
    };
    setData(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(data));
    console.log(data);
  };

  useEffect(() => {
    if (isError) {
      // toast.error(message);
      setErrorMessage(message);
    }

    if (isSuccess || user) {
      // navigate('/dashboard');
      setIsOpen(false);
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch, setIsOpen, setErrorMessage]);

  return (
    <form className='box' onSubmit={handleSubmit}>
      <div className='field'>
        <label className='label'>Email</label>
        <div className='control'>
          <input
            className='input'
            name='email'
            type='email'
            placeholder='e.g. alex@example.com'
            onChange={handleChange}
          />
        </div>
      </div>

      <div className='field'>
        <label className='label'>Password</label>
        <div className='control'>
          <input
            className='input'
            name='password'
            type='password'
            placeholder='********'
            onChange={handleChange}
          />
        </div>
      </div>

      {errorMessage && (
        <article className='message is-warning'>
          <div className='message-header'>
            <p>Warning</p>
            <button
              className='delete'
              aria-label='delete'
              onClick={() => setErrorMessage('')}
            ></button>
          </div>
          <div className='message-body'>
            {errorMessage ? errorMessage : 'Something went wrong'}
          </div>
        </article>
      )}

      <button
        type='submit'
        className={`button is-primary ${isLoading && 'is-loading'}`}
      >
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
