import React from "react";
import { Switch } from "react-router-dom";
import { PublicLayout, PrivateLayout } from "./Layout";
import Login from "../../Pages/Auth/Login";
import Dashboard from "../../Pages/Dashboard";
import User from "../../Pages/User";
import AddUser from "../../Pages/User/Add";
import EditUser from "../../Pages/User/Edit";

import Borrower from "../../Pages/Borrower";
import AddBorrower from "../../Pages/Borrower/Add";
// import EditUser from "../../Pages/User/Edit";
// const AddUser = lazy(() => import("../../Pages/User/Add"));

const Root = () => {
  return (
    <React.Fragment>
      {/* <Suspense fallback={"Loading"}> */}
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
        <PrivateLayout
          path="/user/edit/:id"
          exact
          component={EditUser}
          authenticated={true}
        />
        <PrivateLayout
          path="/borrower"
          exact
          component={Borrower}
          authenticated={true}
        />
        <PrivateLayout
          path="/borrower/add"
          exact
          component={AddBorrower}
          authenticated={true}
        />
        <PrivateLayout
          path="/borrower/edit/:id"
          exact
          component={EditUser}
          authenticated={true}
        />
      </Switch>
      {/* </Suspense> */}
    </React.Fragment>
  );
};

export default Root;
