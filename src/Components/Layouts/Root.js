import React from "react";
import { Switch } from "react-router-dom";
import { PublicLayout, PrivateLayout } from "./Layout";
import Login from "../../Pages/Auth/Login";

const Root = () => {
  return (
    <React.Fragment>
      <Switch>
        <PublicLayout path="/" exact component={Login} />
        {/* <PrivateLayout path="/users" exact component={Users} authenticated={true}  /> */}
      </Switch>
    </React.Fragment>
  );
};

export default Root;
