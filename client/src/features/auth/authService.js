// Login user

import axios from 'axios';

const login = async (data) => {
  const response = await axios.post(
    'http://localhost:4001/api/users/login',
    data
  );

  console.log(response);

  if (response.data) {
    sessionStorage.setItem('user', JSON.stringify(response.data.user));
    return response.data.user.token;
  }
};

// Logout user
const logout = () => {
  sessionStorage.removeItem('user');
};

const authService = {
  login,
  logout,
};

export default authService;
