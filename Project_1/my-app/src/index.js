import React from 'react';
import ReactDOM from 'react-dom/client';

import "./fonts.css";
import "./style.css";


import App from "./App.js";

const root = ReactDOM.createRoot(document.getElementById('root'));

var myPage = (
  <App />
);

root.render(myPage);


