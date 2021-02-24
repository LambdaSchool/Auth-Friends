import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useHistory } from "react-router-dom";
import './App.css';

import FriendsList from "./components/FriendsList";
import LoginForm from "./components/LoginForm";
import PrivateRoute from "./components/PrivateRoute";
import { axiosWithAuth } from './utils/axiosWithAuth';


function App() {
  const history = useHistory();

  const logout = () => {
    axiosWithAuth()
    .post("/api/logout")
    .then(() => {
      localStorage.removeItem("token");
      history.push("/login")
    })
  }
  return (
    <Router>
      <div className="App">
        <h1>Test App Header</h1>
        <ul>
          <li>
            <Link to="/login"> Login </Link>
          </li>
          <li>
            <Link to="/protected" component={FriendsList} />
          </li>
          <li>
            <Link onClick={logout}> Logout </Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="protected" component={FriendsList} />
          <Route path="/login" component={LoginForm} />
          <Route component ={LoginForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
