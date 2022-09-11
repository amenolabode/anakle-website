import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    // <Router>
    //    <Navbar />

    //    <Routes>
    //     <Route path='/' />
    //    </Routes>

    //   </Router>

    <React.Fragment>
      <Navbar />
    </React.Fragment>
  );
}

export default App;
