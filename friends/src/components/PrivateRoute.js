import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route 
        {...rest}
        render={(componentProps) => {
            if (localStorage.getItem("token")){
                return <Component {...componentProps} />
            } else {
                return <Redirect to="/login" />
            }
        }}
        />
    )
}

export default PrivateRoute;