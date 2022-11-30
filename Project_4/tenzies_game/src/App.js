import React from "react";
import './App.css';
import Die from './components/Die.js';

function App() {

  let randomNumber1to6 = () => Math.floor(Math.random() * 6 + 1);

  function allNewDice() {
    let diceArray = [];
    for(let loop = 0; loop < 10; loop++) {
      diceArray.push( randomNumber1to6() );
    }
    return diceArray;
  }

  const [dice, setDice] = React.useState( allNewDice() );

  function rollDice() {
    setDice( allNewDice() );
  }

  const theDice = dice.map( (die, index) => ( <Die key={index} value={die} /> ) );

  return (
    <div className="App">
      <main>
        <div className="die-cont">
          {theDice}
        </div> 
        <button className="roll" onClick={rollDice}>Roll</button> 
      </main>
    </div>
  );
}

export default App;
