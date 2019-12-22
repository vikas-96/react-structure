import React, { Component } from "react";
import BorrowerForm from "./Form";
import { updateUser, getUser } from "../../request/User";
// import { connect } from "react-redux";
import getValidationErrors from "../../utils/getValidationErrors";
import notify from "../../utils/showNotifyWithRedirect";
import _ from "lodash";

class Add extends Component {
  state = {
    userDetails: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    try {
      await getUser(id).then(res => this.setState({ userDetails: res }));
    } catch (error) {}
  }

  handleSubmit = async data => {
    const { id } = this.props.match.params;
    try {
      await updateUser(id, data);
      notify({
        time: 1000,
        message: "Borrower updated successfully!",
        path: "/borrower",
        ...this.props
      });
    } catch (error) {
      let errordata = { error: error, isValidationError: true };
      getValidationErrors(errordata);
    }
  };

  render() {
    if (_.isEmpty(this.state.userDetails)) return <p>Loading...</p>;
    return (
      <BorrowerForm
        userDetails={this.state.userDetails}
        isCreate={false}
        submitHandler={this.handleSubmit}
      />
    );
  }
}

export default Add;
