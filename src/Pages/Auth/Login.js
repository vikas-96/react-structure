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
import { withFormik } from "formik";
import * as yup from "yup";

const loginSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .email("Username must be a valid username.")
    .required("Username is a required field."),
  password: yup
    .string()
    .trim()
    .required("password is a required field.")
});

const submitHandler = async values => {
  console.log(values);
  // const form = e.target;
  // const formdata = serialize(form, { hash: true });
  try {
    const user = await login(values);
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

class Login extends Component {
  render() {
    const {
      handleSubmit,
      errors,
      touched,
      handleBlur,
      isSubmitting,
      setFieldValue,
      handleChange
    } = this.props;
    return (
      <Container className="mt-5">
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <div className="text-center">
              <img src="/images/logo.png" alt="demo-logo" width="70px" />{" "}
            </div>
            <div className="card-body">
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <div className="form-label-group">
                    <Input
                      type="email"
                      name="username"
                      placeholder="Username"
                      autoComplete="off"
                      onChange={handleChange}
                      invalid={Boolean(touched.username && errors.username)}
                      valid={!!(touched.username && !errors.username)}
                      onBlur={handleBlur}
                    />
                  </div>
                  <FormFeedback style={{ display: "block" }}>
                    {errors.username}
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <div className="form-label-group">
                    <Input
                      type="password"
                      name="password"
                      placeholder="********"
                      autoComplete="off"
                      onChange={handleChange}
                      invalid={Boolean(touched.password && errors.password)}
                      valid={!!(touched.password && !errors.password)}
                      onBlur={handleBlur}
                    />
                  </div>
                  <FormFeedback style={{ display: "block" }}>
                    {errors.password}
                  </FormFeedback>
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

// export default Login;
export default withFormik({
  mapPropsToValues: props => ({
    username: props.username,
    password: props.password
  }),
  validationSchema: loginSchema,
  handleSubmit: submitHandler
})(Login);
