import React from "react";
import { Link } from "react-router-dom";
// import Listing from "./Listing";

const User = () => {
  return (
    <React.Fragment>
      <Link to="/borrower/add" className="btn btn-success float-right">
        Add Borrower
      </Link>
      {/* <Listing /> */}
    </React.Fragment>
  );
};

export default User;
