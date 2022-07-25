import Header from "./components/Header.js";
import SplashBox from "./components/SplashBox.js";
import PromoSlider from "./components/PromoSlider.js";

import './App.css';
import './css/index.css';

/**
 * 
 * DESIGN - https://scrimba.com/learn/learnreact/project-setup-navbar-cob544349a4494c348ab844f0
 * @returns App
 */


function App() {
  return (
    <div className="app">
      <div className="frame">
        <Header />
        <SplashBox />
        <PromoSlider />
      </div>
    </div>
  );
}

export default App;
