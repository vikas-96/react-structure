import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Container,
  Row,
  Col
} from "reactstrap";

class Login extends Component {
  render() {
    return (
      <Container className="mt-5">
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <div className="text-center">
              <img src="/images/logo.png" alt="demo-logo" width="70px" />{" "}
            </div>
            <div className="card-body">
              <Form>
                <FormGroup>
                  <div className="form-label-group">
                    <Input
                      type="email"
                      name="username"
                      placeholder="Username"
                      autoComplete="off"
                    />
                  </div>
                </FormGroup>
                <FormGroup>
                  <div className="form-label-group">
                    <Input
                      type="password"
                      name="password"
                      placeholder="********"
                      autoComplete="off"
                    />
                  </div>
                </FormGroup>
                <FormGroup>
                  <Button size="sm" type="submit" color="primary" block>
                    Login
                  </Button>
                </FormGroup>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
