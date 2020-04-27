import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
function Login(props) {
  const [credentials, setCredentials] = useState("");

  const handleChange = (e, setter) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then((res) => {
        console.log("Login successful", res);
        localStorage.setItem("token", res.data.payload.token);
        props.setUsername(res.data.payload.username);
        props.history.push("/friends");
      })
      .catch((err) => console.error("There was an error, sorry. ", err));
  };

  return (
    <form onSubmit={login}>
      Do you have friends? Log in to find out.
      <br />
      <br />
      Username <br />
      <input
        type="text"
        name="username"
        value={credentials.username}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <br />
      Password <br />
      <input
        type="password"
        name="password"
        value={credentials.password}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <br />
      <br />
      <div className="buttonsContainer">
        <Button type="submit" variant="primary">
          Log in
        </Button>
        <Button onClick={(e) => {}} variant="secondary">
          Sign Up
        </Button>
      </div>
    </form>
  );
}

export default Login;
