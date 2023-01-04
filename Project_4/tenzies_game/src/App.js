import React from "react";
import './App.css';
import Die from './components/Die.js';
import {nanoid} from "nanoid";

function App() {

  let randomNumber1to6 = () => Math.floor(Math.random() * 6 + 1);

  function createDie() {
    return { 
      value: randomNumber1to6(), 
      isHeld: false,
      id: nanoid() 
    }
  }

  function allNewDice() {
    let diceArray = [];
    for(let loop = 0; loop < 10; loop++) {
      diceArray.push(createDie());
    }
    return diceArray;
  }

  const [dice, setDice] = React.useState( allNewDice() );

  function rollDice() {

    setDice( (oldDice) => {
      const replacementDice = oldDice.map(
        (eachDie) => {
          return (eachDie.isHeld)
            ? eachDie
            : createDie()
        }
      );
      return replacementDice;
    })

  }

  function holdDice(id) {

    setDice( (oldDice) => {
      const replacementDice = oldDice.map(
        (die) => { 
          return (die.id === id)
            ? {...die, isHeld: !die.isHeld}
            : die
        }
      );
      return replacementDice;

    } )
  }

  const theDice = dice.map( (die, index) => 
    ( <Die 
        key={die.id} 
        value={die.value}  
        isHeld={die.isHeld}
        holdDice={ () => { holdDice(die.id) }  } /> ) 
  );

  return (
    <div className="App">
      <main>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="die-cont">
          {theDice}
        </div> 
        <button className="roll" onClick={rollDice}>Roll</button> 
      </main>
    </div>
  );
}

export default App;
