import React from 'react';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
function App() {
  return (
    <div className="App">
      <h1>Welcome to Auth Friends!</h1>
      <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Friends List</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
