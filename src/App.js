import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
// import { RouterComponent } from './router';
import { LoginPage } from './LoginPage';
import { DashboardPage } from './DashboardPage';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={LoginPage} />
          <Route path='/dashboard' component={DashboardPage} />
        </Switch>
      </Router>
    )};
}

export default App;