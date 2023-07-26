import './App.css';
import Onboarding from './pages/Onboarding'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Chat from './pages/Chat';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Onboarding />} />
        <Route index element={<Onboarding />} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/chat' element={<Chat/>} />
      </Routes>
    </Router>
  )
}

export default App;
