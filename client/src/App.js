import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Riders from './components/Riders';
import Drivers from './components/Drivers';
import Navigation from './components/layout/Navigation';
import './App.css';

function App() {
  return (
    <Router>
      <Container fluid>
        <Navigation />
        <Switch>
          <Route path="/drivers">
            <Drivers />
          </Route>
          <Route path="/">
            <Riders />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
