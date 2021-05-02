import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// User Side
import Home from "./user/Home"
import AdminLogin from "./admin/AdminLogin"


// Admin Side
import AdminHome from "./admin/AdminHome"


// Routes - Restricted

import AdminRoutes from './admin/AdminRoutes'

const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/spacely/login" exact component={AdminLogin} />

          <AdminRoutes path="/spacely/admin" exact component={AdminHome} />

        </Switch>
      </BrowserRouter>
    );
  };

export default Routes;