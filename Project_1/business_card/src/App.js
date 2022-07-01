import React from "react";
import './App.css';

import About from './components/About.js';
import Info from './components/Info.js';
import Interests from './components/Interests';
import Footer from './components/Footer.js';

export default App;

function App() {
  return (
    <div className="App">
      <div className="frame">
        <Info />
        <About />
        <Interests />
        <Footer />  
      </div>
    </div>
  );
}

