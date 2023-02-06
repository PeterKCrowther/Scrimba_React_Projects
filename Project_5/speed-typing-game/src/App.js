import './css/styles.css';

import React, {useState} from "react";

function App() {
    
  const [text, setText] = useState("");
  
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
          <h4>Time reminaing: ???</h4>
          <button
                onClick={() => countWords(text)}>
                Start
            </button>
          <h1>Word count: ???</h1>
      </div>
  )
}

export default App
