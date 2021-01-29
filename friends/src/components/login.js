import React from "react"

class Login extends React.Component {


    handleChange = (e) => {
        
    }


    render() {
        return(
            <div>
                <form>
                    <input 
                    type="text"
                    name="username"
                    />
                    <input 
                    type="password"
                    name="password"
                    />
                    <button>Log In</button>
                </form>
            </div>
        )
    }
};

export default Login;