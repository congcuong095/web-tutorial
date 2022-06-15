import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom'
import {Switch} from 'react-router'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Navbar />} />
      </Routes>
    </div>
  );
}

export default App;
