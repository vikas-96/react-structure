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

class UserForm extends React.Component {
  state = {
    roles: {}
  };

  componentsDidMount() {
    this.fetchRole();
  }

  fetchRole = async () => {
    console.log("asd");
    await getRole().then(res => this.setState({ roles: res }));
    console.log(this.state);
  };

  render() {
    const { roles } = this.state;
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
                    //   value={ActiveOptions.find(
                    //     option => option.value === values.is_active
                    //   )}
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="role">Role</Label>
                  <Select
                    name="role"
                    options={RoleOptions(roles)}
                    //   value={RoleOptions(role).find(
                    //     option => option.value === values.role
                    //   )}
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
