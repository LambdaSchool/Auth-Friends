import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: '',
        }
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    };

    login = e => {
        e.preventDefault();
        axios.post('https://localhost:5000/api/login', this.state.credentials)
        .then(res => {
            console.log(res)
        })
    }

    render(){
        return(
            <div>
                <form>

                    <input
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />

                    <input
                        type='text'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />

                    <button>Login</button>

                </form>
            </div>
        )
    }
};

export default Login;