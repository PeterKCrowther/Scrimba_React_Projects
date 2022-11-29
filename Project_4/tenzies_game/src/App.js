import React from "react";
import './App.css';
import Die from './components/Die.js';

function App() {

  let randomNumber1to6 = () => Math.floor(Math.random() * 6 + 1);

  return (
    <div className="App">
      <main>
        <div className="die-cont">
          <Die value={randomNumber1to6()} />
          <Die value={randomNumber1to6()} />
          <Die value={randomNumber1to6()} />
          <Die value={randomNumber1to6()} />
          <Die value={randomNumber1to6()} />
          <Die value={randomNumber1to6()} />
          <Die value={randomNumber1to6()} />
          <Die value={randomNumber1to6()} />
          <Die value={randomNumber1to6()} />
          <Die value={randomNumber1to6()} />
        </div>  
      </main>
    </div>
  );
}

export default App;
