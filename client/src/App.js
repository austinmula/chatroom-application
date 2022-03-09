import 'bulma/css/bulma.min.css';
import React, { useState } from 'react';
// import MainContent from './components/MainContent';
// import Modal from './components/Modal';
// import NavBar from './components/NavBar';

import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Main from './pages/Main';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />}></Route>
      <Route path='messenger' element={<Main />}></Route>
    </Routes>
  );
}

export default App;
