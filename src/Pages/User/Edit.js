import React, { Component } from "react";
import UserForm from "./Form";
import getValidationErrors from "../../utils/getValidationErrors";
import { connect } from "react-redux";
import * as userAction from "../../Store/User/Action";
import _ from "lodash";
import notify from "../../utils/showNotifyWithRedirect";
import updateUserData from "../../Store/User/Action";

class EditUser extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(userAction.getUserData(id));
  }

  handleSubmit = async data => {
    try {
      await this.props.dispatch(updateUserData(data));
    } catch (error) {}
    return this.props;
  };

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
    }
    if (_.isEmpty(this.props.userData)) return <p>Loading...</p>;
    return (
      <UserForm
        submitHandler={this.handleSubmit}
        isCreate={false}
        userData={this.props.userData}
        validationErrors={getValidationErrors(this.props)}
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
