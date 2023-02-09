import './css/styles.css';

import React, {useState, useEffect} from "react";

function App() {
    
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(countWords(text));
  const [timeLeft, setTimeLeft] = useState(5);
  const [gameStarted, setGameStarted] = useState(false);
 
  useEffect( () => {
      setWordCount( () => countWords(text) )
    }
    ,[timeLeft]
  )

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
              value={text.inputText}
              name="inputText"
              onChange={textChange}
          />
          <h4>Time reminaing: {timeLeft}</h4>
          <button
                onClick={() => setGameStarted(true)}>
                Start
            </button>
          <h1>Word count: {wordCount}</h1>
      </div>
  )
}

export default App
