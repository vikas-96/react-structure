import React, { Component } from "react";
import UserForm from "./Form";
import getValidationErrors from "../../utils/getValidationErrors";

class EditUser extends Component {
  render() {
    return <UserForm validationErrors={getValidationErrors(this.props)} />;
  }
}

export default EditUser;
