import './css/styles.css';

import React, {useState} from "react";

function App() {
    
  const [textArea, setTextArea] = useState({inputText: ""});
  
  function textChange(event) {
      const {name, value} = event.target;   
      setTextArea(prevStat => {
          return {...prevStat, [name]: value }
      })
  }
  
  return (
      <div>
          <h1>How fast do you type?</h1>
          <textarea 
              value={textArea.inputText}
              name="inputText"
              onChange={textChange}
          />
          <h4>Time reminaing: ???</h4>
          <button>Start</button>
          <h1>Word count: ???</h1>
      </div>
  )
}

export default App
