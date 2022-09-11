import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/pages/HomePage';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <HomePage />
    </React.Fragment>
    
  );
}

export default App;
