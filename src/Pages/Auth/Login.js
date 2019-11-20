import React, { Component } from "react";
import initAxios from "../../utils/initAxios";
import {
  Button,
  Form,
  FormGroup,
  Input,
  FormFeedback,
  Container,
  Row,
  Col
} from "reactstrap";
import { login } from "../../request/auth";
import serialize from "form-serialize";
import notify from "../../utils/notify";
import getErrorMessage from "../../utils/getErrorMessage";

class Login extends Component {
  submitHandler = async e => {
    e.preventDefault();
    const form = e.target;
    const formdata = serialize(form, { hash: true });
    try {
      const user = await login(formdata);
      // console.log(user.access_token);
      initAxios();
      localStorage.setItem("userDetail", JSON.stringify(user));
      // this.props.history.replace("/users");
    } catch (error) {
      if (error.response.status === 401) {
        notify({
          type: "error",
          text: getErrorMessage(error.response.data)
        });
      }
    }
  };

  render() {
    return (
      <Container className="mt-5">
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <div className="text-center">
              <img src="/images/logo.png" alt="demo-logo" width="70px" />{" "}
            </div>
            <div className="card-body">
              <Form onSubmit={this.submitHandler}>
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
