import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from "@emotion/styled";
const FormWrapper = styled.div`
  max-width: 450px;
  background: #fafafa;
  padding: 30px;
  margin: 50px auto;
  box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);
  border-radius: 10px;
  border: 6px solid #305a72;
`;

export class Login extends React.Component {
  // const history = useHistory();
  state = {
    credentials: {
      username: "",
      password: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
      error: "",
    });
  };

  login = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post("/api/login", this.state.credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);

        this.props.history.push("/protected");
      })
      .catch((err) => {
        this.setState({
          error: err.response.data.error,
        });
      });
  };

  render() {
    return (
      <FormWrapper>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
        <p style={{ color: "red" }}>{this.state.error}</p>
      </FormWrapper>
    );
  }
}

export default Login;
