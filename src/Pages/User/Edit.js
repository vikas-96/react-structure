import React, { Component } from "react";
import UserForm from "./Form";
import getValidationErrors from "../../utils/getValidationErrors";
import { connect } from "react-redux";
import * as userAction from "../../Store/User/Action";
import _ from "lodash";
import notify from "../../utils/showNotifyWithRedirect";

class EditUser extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(userAction.getUserData(id));
  }

  render() {
    if (!_.isEmpty(this.props.error)) {
      if (this.props.error.response.status === 404) {
        notify({
          time: 4000,
          message: "Record not found Please first create the record.",
          path: "/user/add",
          ...this.props
        });
      }
      getValidationErrors(this.props);
    }
    return (
      <UserForm
        userData={this.props.userData}
        validationErrors="{'nmn':'hhhbhb'}"
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.User.userData,
    error: state.User.error
  };
}

export default connect(mapStateToProps)(EditUser);
