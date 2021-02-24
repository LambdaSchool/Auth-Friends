import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch, useHistory } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login"
import Friends from "./components/friends"

function App() {
  return (
    <div className="App">

    <h1>Login</h1>
      <Switch>
        <PrivateRoute exact path="/friends"  component ={Friends} />
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
