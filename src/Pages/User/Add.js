import React, { Component } from "react";
import UserForm from "./Form";
import { createUser } from "../../request/User";

class Add extends Component {
  handleSubmit = data => {
    createUser(data)
      .then(res => {
        this.props.history.push("/user");
      })
      .catch(err => console.log(err.response.data.errors));
  };

  render() {
    return <UserForm submitHandler={this.handleSubmit} />;
  }
}

export default Add;
