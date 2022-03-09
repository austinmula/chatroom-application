import React, { useEffect } from 'react';
import MainContent from '../components/MainContent';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [navigate, user]);

  return <MainContent user={user} />;
};

export default Main;
