import Header from './components/Header.js';
import Card from './components/Card.js';
import cardData from "./data/data.js";
import './App.css';
import './css/style.css';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Header />
        <Card  props={cardData} />
      </div>
    </div>
  );
}

export default App;
