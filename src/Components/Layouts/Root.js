import React from "react";
import { Switch } from "react-router-dom";
import { PublicLayout, PrivateLayout } from "./Layout";
import Login from "../../Pages/Auth/Login";
import Dashboard from "../../Pages/Dashboard";
import User from "../../Pages/User";
import AddUser from "../../Pages/User/Add";

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
        <PrivateLayout
          path="/user"
          exact
          component={User}
          authenticated={true}
        />
        <PrivateLayout
          path="/user/add"
          exact
          component={AddUser}
          authenticated={true}
        />
        {/* <PrivateLayout
          path="/user/edit/:id"
          exact
          component={User}
          authenticated={true}
        /> */}
      </Switch>
    </React.Fragment>
  );
};

export default Root;
