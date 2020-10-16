import React from 'react';
import HomePage from './features/homepage/HomePage';
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
        </Switch>
      </Grommet>
    </Router>
  );
}

export default App;
