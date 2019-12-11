import React, { useState, useEffect } from "react";
import {
  Form,
  // Button,
  FormGroup,
  Input,
  Label,
  Row,
  Col
  // ListGroupItem
} from "reactstrap";
import Select from "react-select";
import { getRole } from "../../request/User";
import _ from "lodash";

const UserForm = () => {
  const [role, setRole] = useState({});

  useEffect(() => {
    fetchRole();
  }, []);

  async function fetchRole() {
    await getRole().then(res => setRole(res));
  }

  const ActiveOptions = [
    { value: true, label: "Active" },
    { value: false, label: "Inactive" }
  ];

  //   console.log(role);

  if (_.isEmpty(role)) return <p>Loading...</p>;

  const RoleOptions = role => {
    const roleArry = [];
    role.data.map(role =>
      roleArry.push({ label: role.display_name, value: role.name })
    );
    return roleArry;
  };

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
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="confirm_password">Confirm Password`</Label>
                <Input
                  type="password"
                  name="confirm_password"
                  placeholder="********"
                  autoComplete="off"
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="is_active">Status</Label>
                <Select options={ActiveOptions} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="role">Role</Label>
                <Select options={RoleOptions(role)} />
              </FormGroup>
            </Col>
          </Row>
        </div>
      </Form>
    </React.Fragment>
  );
};

export default UserForm;
