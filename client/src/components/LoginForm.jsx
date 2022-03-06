import React, { useState } from 'react';

const LoginForm = () => {
  const [data, setData] = useState({});
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
    console.log(data);
  };

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

      <button type='submit' className='button is-primary'>
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
