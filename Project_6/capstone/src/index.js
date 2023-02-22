import React from "react"
import ReactDOM from "react-dom/client"
import {BrowserRouter} from 'react-router-dom';
import App from "./App"
import {CapstoneContextProvider} from "./context/capstoneContext.js"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <CapstoneContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </CapstoneContextProvider>
  </React.StrictMode>
);


