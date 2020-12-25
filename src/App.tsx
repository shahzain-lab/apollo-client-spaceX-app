import React from 'react';
import './App.css';
import {
   Header,
    About,
     LaunchDetailsContainer,
     LaunchesGrid,
     Footer
     } from './components/index';

function App() {
  return (
    <div className="App">
      <LaunchDetailsContainer />
       <Footer />
    </div>
  );
}

export default App;
