import React from 'react';
import './App.css';
import { Header } from './components/wrapper/Header/Header';
import {About} from './components/wrapper/about/About';
// import LaunchesGrid from './components/Launches/Grid';

function App() {
  return (
    <div className="App">
      
      <Header />
      <About />
    </div>
  );
}

export default App;
