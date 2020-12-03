import "./App.css";
import { Switch, Route } from "react-router-dom";

import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Friends from "./components/Friends";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/Home";
import OtherProtected from "./components/OtherProtected";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <PrivateRoute path="/other">
          <OtherProtected />
        </PrivateRoute>
        <PrivateRoute path="/friends">
          <Friends />
        </PrivateRoute>
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
