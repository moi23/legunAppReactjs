import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import HomePage from './pages/home/index';


import PraiaGrandePage from './pages/apps/PraiaGrandePage';
import MineirosDoTietePage from './pages/apps/MineirosdoTietePage';



const App = () => {
  return (
    <Router>
    <div>
      <Switch>
				<Route exact path="/praiagrande">
          <PraiaGrandePage />
        </Route>
				<Route exact path="/mineirosdotiete">
          <MineirosDoTietePage />
        </Route>
				{/* <Route exact path="/mineirosdotiete">
          <MineirosDoTietePage />
        </Route> */}
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  </Router>
  )
}


export default App;
