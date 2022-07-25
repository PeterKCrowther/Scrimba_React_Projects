import Header from "./components/Header.js";
import SplashBox from "./components/SplashBox.js";

import './App.css';
import './css/index.css';

function App() {
  return (
    <div className="app">
      <div className="frame">
        <Header />
        <SplashBox />
      </div>
    </div>
  );
}

export default App;
