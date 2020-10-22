import React from 'react';
import HomePage from './features/pages/homepage/HomePage';
import CvPage from './features/pages/cv/CvPage'
import PresentationPage from './features/pages/presentation/PresentationPage'
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
          <Route exact path="/presentation" >
            <PresentationPage />
          </Route>
        </Switch>
      </Grommet>
    </Router>
  );
}

export default App;
