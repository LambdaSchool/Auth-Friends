import React from 'react'
import './App.css';
import Login from './components/login'
import FriendList from './components/friendList'
import PrivateRoute from './axios/privateRoute'

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Friends!</h1>
        <Router>
          <div className="App">
            <ul>
              <Link to="/login">Login</Link>
            </ul>
            <ul>
            <Link to="/protected">Protected Page</Link>
            </ul>
            <Switch>
              <PrivateRoute exact path="/protected" component={FriendList} />
              <Route path="/login" component={Login} />
              <Route component={Login} />
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
