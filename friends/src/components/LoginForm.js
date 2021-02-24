import React from 'react'
import axios from "axios";

class Login extends React.Component {
    state = {
        creds: {
            username: "",
            password: ""
        },
        error: "",
    }

    login = event => {
        event.preventDefault()
        axios
        .post("http://localhost:5000/api/login", this.state.credentials)
        .then((res) => {
            localStorage.setItem("token", JSON.stringify(res.data.payload));
            this.props.history.push("/friends");
        })
        .catch((error) => {
            this.setState({error: error.response.data.err})
        })
        //pass axios post call here, using token retrieved to set item in localStorage.


    }

    handleChange = event => {
        this.setState({
            creds: {
                ...this.state.creds,
                [event.target.name]: event.target.value,
            },
            error: "",
        })
    };

    render() {
        return(
            <div>
                <form onSubmit={this.login} >
                    <input
                    type="text"
                    name="username"
                    value={this.state.creds.username}
                    onChange={this.handleChange}
                    />
                    <input
                    type="password"
                    name="password"
                    value={this.state.creds.password}
                    onChange={this.handleChange}
                    />

                    <p>{this.state.error}</p>

                    <button> Log In </button>
                </form>
            </div>
        )
    }
}

export default Login;