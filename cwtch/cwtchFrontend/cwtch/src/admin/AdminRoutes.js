import React from "react";
import { Route, Redirect } from "react-router-dom";


import {isAdminAutheticated} from './middleware/authhelper'

const AdminRoutes = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props =>
          isAdminAutheticated() && isAdminAutheticated().role === 1 ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/spacely/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  };
  
  export default AdminRoutes;