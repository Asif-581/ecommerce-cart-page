import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './context/context.jsx'

import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
        

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </PrimeReactProvider>
  </React.StrictMode>
);
