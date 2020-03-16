import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Riders from './components/Riders';
import Drivers from './components/Drivers';
import Homepage from './components/Homepage';
import Navigation from './components/layout/Navigation';
import Signup from './components/Signup';
import Signin from './components/Signin';
import RiderSignUp from './components/RiderSignUp';
import DriverSignUp from './components/DriverSignUp';
import './App.css';

function App() {
  return (
    <Router>
      <Container className="h-100" fluid>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Riders />
          </Route>
          <Route path="/drivers">
            <Drivers />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/riderssignup">
            <RiderSignUp />
          </Route>
          <Route path="/driverssignup">
            <DriverSignUp />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/homepage">
            <Homepage />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
