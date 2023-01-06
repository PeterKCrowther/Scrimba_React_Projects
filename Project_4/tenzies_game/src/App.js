import React from 'react';
import './App.css';
import Die from './components/Die.js';
import {nanoid} from "nanoid"
import Confetti from './components/Confetti';
import CurrentScore from './components/CurrentScore';
import BestScore from './components/BestScore';

function App() {
 
  let randomNumber1to6 = () => Math.floor(Math.random() * 6 + 1);

  const [dice, setDice] = React.useState( allNewDice() );
  const [currentScore, setCurrentScore] = React.useState(0); 
  const [bestScore, setBestScore] = React.useState(getBestScore());   
  const [tenzies, setTenzies] = React.useState(false); 

  React.useEffect(() => {  
    ( allDieHeld() && allDieValuesMatch() )
      ? setTenzies(true)
      : setTenzies(false)     
  }, [dice])

  React.useEffect(() => {  
    ( tenzies )
      ? gameComplete()
      : gameIncomplete()     
  }, [tenzies]) 

  function getBestScore() {
    const savedBestScore = window.localStorage.getItem('savedBestScore');
    return (savedBestScore !== null)
      ? parseInt(savedBestScore)
      : 0
  }

  function checkBestScore() {
    if (currentScore < bestScore) {
      setBestScore(currentScore);
      window.localStorage.setItem('savedBestScore', ( currentScore.toString() ) );
    }
  }

  function allDieHeld() {
    return dice.every( (die) => die.isHeld );
  }

  function allDieValuesMatch() {
    const dieValue = dice[0].value;
    return dice.every( (die) => dieValue === die.value );
  }
      
  function gameComplete() {
    console.log("You won!"); 
    checkBestScore();          
  }  

  function gameIncomplete() {
    console.log("Keep Going!");           
  }   

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

  function buttonClick() {
    if ( tenzies )
      {gameReset()}
    else {
      scorePlusOne();
      rollDice();
    }
  }

  function gameReset() {
    setCurrentScore(0);
    setTenzies(false);
    setDice( () => allNewDice() );
  }

  function scorePlusOne() {
    setCurrentScore( (oldScore) => (oldScore + 1) );
  }

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
        { tenzies && <Confetti /> }
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

        <table className="scores">
          <thead>
            <tr><td>Your Score</td><td>Best Score</td></tr>
          </thead>
          <tbody>
            <tr>
              <CurrentScore score={currentScore} />
              <BestScore score={bestScore} />
            </tr>
          </tbody>            
        </table>

        <div className="die-cont">
          {theDice}
        </div> 
        <button className="roll" onClick={buttonClick}>
          { (tenzies) ? "New Game" : "Roll" }  
        </button> 
      </main>
    </div>
  );
}

export default App;
