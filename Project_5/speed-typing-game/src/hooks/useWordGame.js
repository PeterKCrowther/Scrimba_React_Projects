import {useEffect, useRef, useState} from "react";

function useWordGame(gameLenthInSecs = 15) {
    
    const [text, setText] = useState("");
    const [wordCount, setWordCount] = useState(countWords(text));
    const [timeLeft, setTimeLeft] = useState(gameLenthInSecs);
    const [gameStarted, setGameStarted] = useState(false);
  
    const textareaRef = useRef(null)
   
    function startGame() {
      setWordCount(0)
      setText("")
      setTimeLeft(gameLenthInSecs)
      setGameStarted(true)
      textareaRef.current.disabled = false
      textareaRef.current.focus()
    } 
  
    function endGame() {
      setGameStarted(false)   
    }
  
    useEffect( () => {
      setWordCount( () => countWords(text) )
    }
    ,[timeLeft])
  
    useEffect(() => {     
      console.log("Time left: " + timeLeft)
  
      if ( gameStarted && timeLeft > 0 ) {
        setTimeout(() => {
          setTimeLeft( (time) => ( time-1 ) )
        }, (1000)); 
      } else if ( timeLeft === 0 ) { //Timer at zero
        endGame()
      }
    }, [gameStarted, timeLeft]);    
  
    
    function textChange(event) {
        const {value} = event.target;   
        setText(value);
    }
  
    function countWords(text) {
      const spacesFoundArr = text.match(/[^\s]+/g);
      const noOfWords = ( spacesFoundArr ? spacesFoundArr.length : 0);
      console.log( noOfWords );
      return noOfWords;
    }

    return {text, textareaRef, textChange, gameStarted, timeLeft, startGame, wordCount};

}

export default useWordGame;

