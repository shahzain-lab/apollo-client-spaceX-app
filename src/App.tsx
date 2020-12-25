import React from 'react';
import './App.css';
// import { Header } from './components/wrapper/Header/Header';
// import {About} from './components/wrapper/about/About';
// import LaunchesGrid from './components/Launches/Grid';
import { LaunchDetailsContainer } from './components/LaunchDetail/LaunchDetailsContainer';

function App() {
  return (
    <div className="App">
      
      {/* <LaunchesGrid /> */}
      <LaunchDetailsContainer />
    </div>
  );
}

export default App;
