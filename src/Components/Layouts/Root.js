import React from "react";
import { Switch } from "react-router-dom";
import { PublicLayout, PrivateLayout } from "./Layout";
import Login from "../../Pages/Auth/Login";
import Dashboard from "../../Pages/Dashboard";

const Root = () => {
  return (
    <React.Fragment>
      <Switch>
        <PublicLayout path="/" exact component={Login} />
        <PrivateLayout
          path="/dashboard"
          exact
          component={Dashboard}
          authenticated={true}
        />
      </Switch>
    </React.Fragment>
  );
};

export default Root;
