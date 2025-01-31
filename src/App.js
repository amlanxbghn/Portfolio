import React from 'react';
import Navbar from './Navbar';
import About from './about';
import Intro from './Intro.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Intro />
        <About />
      </div>
    </div>
  );
}

export default App;
