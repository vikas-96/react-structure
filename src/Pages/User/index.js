import React from "react";
import { Link } from "react-router-dom";
import Listing from "./Listing";

const User = () => {
  return (
    <React.Fragment>
      <Link to="/user/add" className="btn btn-success float-right">
        Add User
      </Link>
      {/* <Listing /> */}
    </React.Fragment>
  );
};

export default User;
