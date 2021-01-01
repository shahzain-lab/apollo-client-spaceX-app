import React from 'react';
import './App.css';
import {
   Header,
    About,
     LaunchDetailsContainer,
     LaunchesGrid,
     } from './components/index';
     import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 

function App() {
    const [id,setId] = React.useState(13);
    const handleChange = React.useCallback(newId => {
      setId(newId);
    },[])


  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />      
          <About />
        </Route>
        <Route exact path="/launches"><LaunchesGrid handleChange={handleChange} /></Route>
        <Route exact path="/launches/details"><LaunchDetailsContainer id={id}/></Route>
        </Switch>
    </Router>
  );
}

export default App;
