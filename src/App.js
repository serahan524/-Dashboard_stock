import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Company from './pages/Company';
import Client from './pages/Client';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/client" element={<Client />} />
          <Route path="/company" element={<Company />} />
       
        </Routes>
      </Navbar>
    </BrowserRouter>
  );
};

export default App;