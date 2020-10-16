import React from 'react';
import HomePage from './features/homepage/HomePage';
import CvPage from './features/cv/CvPage'
import { Grommet } from 'grommet';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Grommet plain>
        <Switch>
          <Route exact path="/" >
            <HomePage />
          </Route>
          <Route exact path="/cv" >
            <CvPage />
          </Route>
        </Switch>
      </Grommet>
    </Router>
  );
}

export default App;
