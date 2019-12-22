import React, { Component } from "react";
import BorrowerForm from "./Form";
import { createUser } from "../../request/User";
// import { connect } from "react-redux";
import getValidationErrors from "../../utils/getValidationErrors";
import notify from "../../utils/showNotifyWithRedirect";

class Add extends Component {
  handleSubmit = async data => {
    try {
      await createUser(data);
      notify({
        time: 1000,
        message: "Borrower created successfully!",
        path: "/borrower",
        ...this.props
      });
    } catch (error) {
      let errordata = { error: error, isValidationError: true };
      getValidationErrors(errordata);
    }
  };

  render() {
    return <BorrowerForm isCreate={true} submitHandler={this.handleSubmit} />;
  }
}

export default Add;
