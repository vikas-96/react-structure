import React from "react";

const initialState = {
  isSubmitting: false,
  contactDetails: {
    name: "",
    email: "",
    country: "",
    phone: ""
  }
};

const Contact = (Component, props) => {
  class Contacthoc extends React.Component {
    constructor(props) {
      super(props);
      this.state = initialState;
    }

    resetFrom = () => {
      console.log("reset");
      this.setState(initialState);
    };

    handleChange = e => {
      this.setState({
        contactDetails: {
          ...this.state.contactDetails,
          [e.target.name]: e.target.value
        }
      });
    };

    handleSelect = (e, componentName) => {
      this.setState({
        contactDetails: {
          ...this.state.contactDetails,
          [componentName.name]: e.value
        }
      });
    };

    setSubmitting = bool => {
      this.setState({ isSubmitting: bool });
    };
    render() {
      return (
        <Component
          handleChange={this.handleChange}
          handleSelect={this.handleSelect}
          setSubmitting={this.setSubmitting}
          resetFrom={this.resetFrom}
          {...this.state}
        />
      );
    }
  }
  return Contacthoc;
};

export default Contact;
