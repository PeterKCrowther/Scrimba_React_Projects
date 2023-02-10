import './css/styles.css';

import React, {useState, useEffect} from "react";

function App() {

  const gameLenthInSecs = 5;
    
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(countWords(text));
  const [timeLeft, setTimeLeft] = useState(gameLenthInSecs);
  const [gameStarted, setGameStarted] = useState(false);
 
  useEffect( () => {
      setWordCount( () => countWords(text) )
    }
    ,[timeLeft]
  )

  function startButtonClick() {
    if (timeLeft === 0) {
      setWordCount(0)
      setText("")
      setTimeLeft(gameLenthInSecs)
      setGameStarted(true)
    } else if (timeLeft > 0){
      setGameStarted(true)
    }
    
  }

  useEffect(() => {     
    console.log("Time left: " + timeLeft)

    if ( gameStarted && timeLeft > 0 ) {
      setTimeout(() => {
        setTimeLeft( (time) => ( time-1 ) )
      }, (1000)); 
    } else if ( timeLeft === 0 ) { //Timer at zero
      setGameStarted(false)
      console.log("isTimeRunning set to false");      
    }
}, [gameStarted, timeLeft]);    

  
  function textChange(event) {
      const {value} = event.target;   
      setText(value);
      // setText(prevStat => {
      //     return {...prevStat, [name]: value }
      // })
  }

  function countWords(text) {
    const spacesFoundArr = text.match(/[^\s]+/g);
    const noOfWords = ( spacesFoundArr ? spacesFoundArr.length : 0);
    console.log( noOfWords );
    return noOfWords;
  }
  
  return (
      <div>
          <h1>How fast do you type?</h1>
          <textarea 
              value={text}
              name="inputText"
              onChange={textChange}
          />
          <h4>Time reminaing: {timeLeft}</h4>
          <button
                //onClick={() => setGameStarted(true)}>
                onClick={() => startButtonClick()}>
                Start
            </button>
          <h1>Word count: {wordCount}</h1>
      </div>
  )
}

export default App
