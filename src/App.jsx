
import './App.css'
import React from 'react';
import Navbar from './components/Navbar';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";
        
//core
import "primereact/resources/primereact.min.css";    
import Hero from './components/Hero';

        
function App() {
  return (
    <>
      <Navbar />
      <Hero/>
    </>
  );
}

export default App
