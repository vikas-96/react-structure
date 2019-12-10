import React from "react";
import {
  Form,
  Button,
  FormGroup,
  Input,
  Label,
  Row,
  Col,
  ListGroupItem
} from "reactstrap";
import { select } from "react-select";

const AddUser = () => {
  return (
    <React.Fragment>
      <Form onSubmit="">
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
          </Row>
        </div>
      </Form>
    </React.Fragment>
  );
};

export default AddUser;
