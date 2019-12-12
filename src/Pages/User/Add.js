import React, { Component } from "react";
import UserForm from "./Form";
import { createUserData } from "../../Store/User/Action";
import { connect } from "react-redux";
import getValidationErrors from "../../utils/getValidationErrors";
import notify from "../../utils/showNotifyWithRedirect";

class Add extends Component {
  handleSubmit = async data => {
    try {
      await this.props.dispatch(createUserData(data));
    } catch (error) {}
    return this.props;
  };

  render() {
    if (this.props.isUserCreated) {
      notify({
        time: 1000,
        message: "User created successfully!",
        path: "/user",
        ...this.props
      });
    }
    return (
      <UserForm
        validationErrors={getValidationErrors(this.props)}
        isValidationError={this.props.isValidationError}
        submitHandler={this.handleSubmit}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    isUserCreated: state.User.isUserCreated,
    error: state.User.error,
    isValidationError: state.User.isValidationError
  };
}

export default connect(mapStateToProps)(Add);
