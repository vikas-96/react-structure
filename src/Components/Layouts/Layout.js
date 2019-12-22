import React from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "./UserDashboard/Header";
import Footer from "./UserDashboard/Footer";
import FrontHeader from "../Layouts/Front/Header";

export const PublicLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        <React.Fragment>
          <Component {...props} />
        </React.Fragment>
      )}
    />
  );
};

export const PrivateLayout = ({
  component: Component,
  authenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated ? (
          <div className="wrapper">
            <Header />
            <Component {...props} />
            <Footer />
          </div>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export const FrontLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        <div className="wrapper">
          <FrontHeader />
          <Component {...props} />
        </div>
      )}
    />
  );
};
