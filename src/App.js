import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import HomePage from './pages/home/index';
import AppPage from './pages/apps/index';



const App = () => {
  return (
    <Router>
    <div>
      <Switch>
        <Route path="/apps">
          <AppPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  </Router>
  )
}


export default App;
