import './css/styles.css';

import React, {useState, useEffect} from "react";

function App() {
    
  const [text, setText] = useState("");
  const [timeLeft, setTimeLeft] = useState(10);
  const [startGame, setStartGame] = useState(false);
 
  useEffect(() => {     
    console.log("Time left: " + timeLeft)

    if ( startGame && timeLeft > 0 ) {
      setTimeout(() => {
        setTimeLeft( (time) => ( time-1 ) )
      }, (1000)); 
    }   
}, [startGame, timeLeft]);    

  
  function textChange(event) {
      const {value} = event.target;   
      setText(value);
      // setText(prevStat => {
      //     return {...prevStat, [name]: value }
      // })
  }

  function countWords(text) {
    const spacesFoundArr = text.match(/[^\s]+/g);
    console.log( spacesFoundArr ? spacesFoundArr.length : 0);
  }
  
  return (
      <div>
          <h1>How fast do you type?</h1>
          <textarea 
              value={text.inputText}
              name="inputText"
              onChange={textChange}
          />
          <h4>Time reminaing: {timeLeft}</h4>
          <button
                onClick={() => setStartGame(true)}>
                Start
            </button>
          <h1>Word count: ???</h1>
      </div>
  )
}

export default App
