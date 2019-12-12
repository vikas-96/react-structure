import React, { Component } from "react";
import UserForm from "./Form";
import { createUserData } from "../../Store/User/Action";
import { connect } from "react-redux";

class Add extends Component {
  handleSubmit = async data => {
    try {
      await this.props.dispatch(createUserData(data));
    } catch (error) {}
    return this.props;
  };

  render() {
    return <UserForm submitHandler={this.handleSubmit} />;
  }
}

function mapStateToProps(state) {
  return {
    userData: state.User.userData,
    error: state.User.error,
    isValidationError: state.User.isValidationError
  };
}

export default connect(mapStateToProps)(Add);
