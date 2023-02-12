import './css/styles.css';

import React from "react";
import useWordGame from "./hooks/useWordGame.js"

function App() {
  
  const {text, textareaRef, textChange, gameStarted, timeLeft, startGame, wordCount} = useWordGame();

  return (
      <div>
          <h1>How fast do you type?</h1>
          <textarea 
              ref={textareaRef}
              value={text}
              name="inputText"
              onChange={textChange}
              disabled={!gameStarted}              
          />
          <h4>Time reminaing: {timeLeft}</h4>
          <button
                onClick={() => startGame()}
                disabled={gameStarted}   
                >
                Start
            </button>
          <h1>Word count: {wordCount}</h1>
      </div>
  )
}

export default App
