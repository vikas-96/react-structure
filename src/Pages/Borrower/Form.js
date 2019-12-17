import React from "react";
import {
  Form,
  Button,
  FormGroup,
  Input,
  Label,
  Row,
  Col,
  FormFeedback
} from "reactstrap";
import Select from "react-select";
import { getRole } from "../../request/User";
import _ from "lodash";

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
  state = {
    roles: {},
    userDetails: {
      firstname: "",
      lastname: "",
      email: "",
      contact_number: "",
      password: "",
      confirm_password: "",
      is_active: "",
      role: ""
    }
  };

  componentDidMount() {
    this.fetchRole();
  }

  fetchRole = async () => {
    await getRole().then(res => this.setState({ roles: res }));
    console.log(this.state);
  };

  render() {
    const { roles } = this.state;
    const {
      firstname,
      lastname,
      email,
      contact_number,
      password,
      confirm_password,
      is_active,
      role
    } = this.state.userDetails;
    // const onSubmit = async (values, { props, setSubmitting }) => {
    //   try {
    //     setSubmitting(true);
    //     console.log(values);
    //     const res = await props.submitHandler(values);
    //     if (res.isValidationError) {
    //       setSubmitting(false);
    //     }
    //     setSubmitting(false);
    //   } catch (error) {
    //     setSubmitting(false);
    //   }
    // };

    if (_.isEmpty(roles)) return <p>Loading...</p>;
    return (
      <React.Fragment>
        <Form>
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
                  />
                  <FormFeedback></FormFeedback>
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
                  />
                  <FormFeedback></FormFeedback>
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
                  />
                  <FormFeedback></FormFeedback>
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
                  />
                  <FormFeedback></FormFeedback>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    placeholder="********"
                    autoComplete="off"
                    value={password}
                  />
                  <FormFeedback></FormFeedback>
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
                  />
                  <FormFeedback></FormFeedback>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="is_active">Status</Label>
                  <Select
                    name="is_active"
                    options={ActiveOptions}
                    value={ActiveOptions.find(
                      option => option.value === is_active
                    )}
                  />
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
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Col md={2} className="float-right">
                <Button size="sm" type="submit" color="primary" block>
                  Submit
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
