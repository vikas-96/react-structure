import React from "react";
import { Form, Button, FormGroup, Input, Label, Row, Col } from "reactstrap";
import Select from "react-select";
import { getRole } from "../../request/User";
import _ from "lodash";
import SimpleReactValidator from "simple-react-validator";

const ActiveOptions = [
  { value: true, label: "Active" },
  { value: false, label: "Inactive" }
];

const RoleOptions = roles => {
  const roleArry = [];
  roles.data.map(role =>
    roleArry.push({ label: role.display_name, value: role.name })
  );
  return roleArry;
};

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitting: false,
      roles: {},
      // errors: "",
      confirm_password: "",
      userDetails: {
        firstname: "",
        lastname: "",
        email: "",
        contact_number: "",
        password: "",
        is_active: "",
        role: ""
      }
    };
    this.validator = new SimpleReactValidator();
  }

  componentDidMount() {
    this.fetchRole();
    if (!_.isEmpty(this.props.userDetails)) {
      this.setState({
        userDetails: {
          firstname: this.props.userDetails.firstname,
          lastname: this.props.userDetails.lastname,
          email: this.props.userDetails.email,
          contact_number: this.props.userDetails.contact_number,
          is_active: this.props.userDetails.is_active,
          role: this.props.userDetails.role
        }
      });
    }
  }

  static getDerivedStateFromProps(props, state) {
    // if (!_.isEmpty(props.userDetails)) {
    //   if (props.userDetails !== state.userDetails) {
    //     return {
    //       userDetails: {
    //         firstname: props.userDetails.firstname,
    //         lastname: props.userDetails.lastname,
    //         email: props.userDetails.email,
    //         contact_number: props.userDetails.contact_number,
    //         is_active: props.userDetails.is_active,
    //         role: props.userDetails.role
    //       }
    //     };
    //   }
    // }
    // Return null to indicate no change to state.
    return null;
  }

  fetchRole = async () => {
    await getRole().then(res => this.setState({ roles: res }));
  };

  // handleServerError = e => {
  //   if (this.validator.fieldValid("" + e.target.name + "")) {
  //     const { errors } = this.state;
  //     delete errors[e.target.name];
  //     this.setState({
  //       errors: errors
  //     });
  //   }
  // };

  handleChange = e => {
    if (!_.has(this.state.userDetails, `${e.target.name}`)) {
      this.setState({
        [e.target.name]: e.target.value
      });
      return true;
    }
    this.setState({
      userDetails: {
        ...this.state.userDetails,
        [e.target.name]: e.target.value
      }
    });
    // this.handleServerError(e);
  };

  handleSelect = (e, componentName) => {
    this.setState({
      userDetails: {
        ...this.state.userDetails,
        [componentName.name]: e.value
      }
    });
  };

  isSubmitting = bool => {
    this.setState({ isSubmitting: bool });
  };

  handleSubmit = async e => {
    e.preventDefault();

    if (!this.validator.allValid()) {
      this.validator.showMessages();
      this.forceUpdate();
      return false;
    }
    try {
      this.isSubmitting(true);
      await this.props.submitHandler(this.state.userDetails);
      this.isSubmitting(false);
    } catch (error) {
      this.isSubmitting(false);
      return false;
    }
  };

  render() {
    this.validator.purgeFields();
    const { roles, isSubmitting, confirm_password } = this.state;
    const {
      firstname,
      lastname,
      email,
      contact_number,
      password,
      is_active,
      role
    } = this.state.userDetails;

    if (_.isEmpty(roles)) return <p>Loading...</p>;

    return (
      <React.Fragment>
        <Form onSubmit={this.handleSubmit}>
          <div className="container-fluid">
            <Row>
              <Col md={3}>
                <FormGroup>
                  <Label for="firstname">First Name</Label>
                  <Input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    autoComplete="off"
                    value={firstname}
                    onChange={this.handleChange}
                    onBlur={() => this.validator.showMessageFor("FirstName")}
                  />
                  {this.validator.message(
                    "FirstName",
                    firstname,
                    "required|alpha_space"
                  )}
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="lastname">Last Name</Label>
                  <Input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    autoComplete="off"
                    value={lastname}
                    onChange={this.handleChange}
                    onBlur={() => this.validator.showMessageFor("LastName")}
                  />
                  {this.validator.message(
                    "LastName",
                    lastname,
                    "required|alpha_space"
                  )}
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="off"
                    value={email}
                    onChange={this.handleChange}
                    onBlur={() => this.validator.showMessageFor("Email")}
                  />
                  {this.validator.message("Email", email, "required|email")}
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="contact_number">Contact Number</Label>
                  <Input
                    type="number"
                    name="contact_number"
                    placeholder="Contact Number"
                    autoComplete="off"
                    value={contact_number}
                    onChange={this.handleChange}
                    onBlur={() =>
                      this.validator.showMessageFor("Contact Number")
                    }
                  />
                  {this.validator.message(
                    "Contact Number",
                    contact_number,
                    "required|numeric"
                  )}
                </FormGroup>
              </Col>
              {this.props.isCreate && (
                <div>
                  <Col md={3}>
                    <FormGroup>
                      <Label for="password">Password</Label>
                      <Input
                        type="password"
                        name="password"
                        placeholder="********"
                        autoComplete="off"
                        value={password}
                        onChange={this.handleChange}
                        onBlur={() => this.validator.showMessageFor("Password")}
                      />
                      {this.validator.message("Password", password, "required")}
                    </FormGroup>
                  </Col>
                  <Col md={3}>
                    <FormGroup>
                      <Label for="confirm_password">Confirm Password</Label>
                      <Input
                        type="password"
                        name="confirm_password"
                        placeholder="********"
                        autoComplete="off"
                        value={confirm_password}
                        onChange={this.handleChange}
                        onBlur={() =>
                          this.validator.showMessageFor("Confirm Password")
                        }
                      />
                      {this.validator.message(
                        "Confirm Password",
                        confirm_password,
                        `required|in:${password}`,
                        { messages: { in: "Passwords need to match !" } }
                      )}
                    </FormGroup>
                  </Col>
                </div>
              )}
              <Col md={3}>
                <FormGroup>
                  <Label for="is_active">Status</Label>
                  <Select
                    name="is_active"
                    options={ActiveOptions}
                    value={ActiveOptions.find(
                      option => option.value === is_active
                    )}
                    onChange={this.handleSelect}
                    onBlur={() => this.validator.showMessageFor("Status")}
                  />
                  {this.validator.message("Status", is_active, "required")}
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="role">Role</Label>
                  <Select
                    name="role"
                    options={RoleOptions(roles)}
                    value={RoleOptions(roles).find(
                      option => option.value === role
                    )}
                    onChange={this.handleSelect}
                    onBlur={() => this.validator.showMessageFor("Role")}
                  />
                  {this.validator.message("Role", role, "required")}
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Col md={2} className="float-right">
                <Button size="sm" type="submit" color="primary" block>
                  {isSubmitting ? "Please Wait..." : " Submit"}
                </Button>
              </Col>
            </FormGroup>
          </div>
        </Form>
      </React.Fragment>
    );
  }
}

export default UserForm;
