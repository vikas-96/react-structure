import React, { useState, useEffect } from "react";
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
import { withFormik } from "formik";
import * as yup from "yup";

const loginSchema = yup.object().shape({
  firstname: yup
    .string()
    .trim()
    .required("Firstname is a required field."),
  lastname: yup
    .string()
    .trim()
    .required("Lastname is a required field."),
  email: yup
    .string()
    .trim()
    .email("Email must be a valid email.")
    .required("Email is a required field."),
  contact_number: yup
    .string()
    .trim()
    .required("Contact is a required field.")
    .matches(/^[0-9]{10}$/, {
      message: "Contact must be 10 digits",
      excludeEmptyString: true
    }),
  password: yup
    .string()
    .trim()
    .required("Password is a required field."),
  confirm_password: yup
    .string()
    .trim()
    .required("Confirm Password is a required field.")
    .oneOf([yup.ref("password"), null], "Passwords must match."),
  is_active: yup
    .string()
    .trim()
    .required("Status is a required field."),
  role: yup
    .string()
    .trim()
    .required("Role is a required field.")
});

const onSubmit = async (
  values,
  { props, setSubmitting, setErrors, setStatus }
) => {
  try {
    setSubmitting(true);
    const res = await props.submitHandler(values);
    if (res.isValidationError) {
      setSubmitting(false);
    }
    setSubmitting(false);
  } catch (error) {
    setSubmitting(false);
  }
};

const UserForm = props => {
  const {
    handleSubmit,
    errors,
    touched,
    handleBlur,
    isSubmitting,
    setFieldValue,
    handleChange,
    isValid,
    validationErrors
  } = props;

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
      <Form onSubmit={handleSubmit}>
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
                  onBlur={handleBlur}
                  onChange={handleChange}
                  invalid={Boolean(touched.firstname && errors.firstname)}
                  valid={!!(touched.firstname && !errors.firstname)}
                />
                {!_.isEmpty([errors.firstname, validationErrors.firstname]) &&
                  touched.firstname && (
                    <FormFeedback style={{ display: "block" }}>
                      {errors.firstname || validationErrors.firstname}
                    </FormFeedback>
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
                  onBlur={handleBlur}
                  onChange={handleChange}
                  invalid={Boolean(touched.lastname && errors.lastname)}
                  valid={!!(touched.lastname && !errors.lastname)}
                />
                {!_.isEmpty([errors.lastname, validationErrors.lastname]) &&
                  touched.lastname && (
                    <FormFeedback style={{ display: "block" }}>
                      {errors.lastname || validationErrors.lastname}
                    </FormFeedback>
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
                  onBlur={handleBlur}
                  onChange={handleChange}
                  invalid={Boolean(touched.email && errors.email)}
                  valid={!!(touched.email && !errors.email)}
                />
                {!_.isEmpty([errors.email, validationErrors.email]) &&
                  touched.email && (
                    <FormFeedback style={{ display: "block" }}>
                      {errors.email || validationErrors.email}
                    </FormFeedback>
                  )}
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
                  onBlur={handleBlur}
                  onChange={handleChange}
                  invalid={Boolean(
                    touched.contact_number && errors.contact_number
                  )}
                  valid={!!(touched.contact_number && !errors.contact_number)}
                />
                {!_.isEmpty([
                  errors.contact_number,
                  validationErrors.contact_number
                ]) &&
                  touched.contact_number && (
                    <FormFeedback style={{ display: "block" }}>
                      {errors.contact_number || validationErrors.contact_number}
                    </FormFeedback>
                  )}
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
                  onBlur={handleBlur}
                  onChange={handleChange}
                  invalid={Boolean(touched.password && errors.password)}
                  valid={!!(touched.password && !errors.password)}
                />
                {!_.isEmpty([errors.password, validationErrors.password]) &&
                  touched.password && (
                    <FormFeedback style={{ display: "block" }}>
                      {errors.password || validationErrors.password}
                    </FormFeedback>
                  )}
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
                  onBlur={handleBlur}
                  onChange={handleChange}
                  invalid={Boolean(
                    touched.confirm_password && errors.confirm_password
                  )}
                  valid={
                    !!(touched.confirm_password && !errors.confirm_password)
                  }
                />
                {!_.isEmpty([
                  errors.confirm_password,
                  validationErrors.confirm_password
                ]) &&
                  touched.confirm_password && (
                    <FormFeedback style={{ display: "block" }}>
                      {errors.confirm_password ||
                        validationErrors.confirm_password}
                    </FormFeedback>
                  )}
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="is_active">Status</Label>
                <Select
                  name="is_active"
                  options={ActiveOptions}
                  onBlur={handleBlur}
                  onChange={option => setFieldValue("is_active", option.value)}
                />
                {!_.isEmpty([errors.is_active, validationErrors.is_active]) &&
                  touched.is_active && (
                    <FormFeedback style={{ display: "block" }}>
                      {errors.is_active || validationErrors.is_active}
                    </FormFeedback>
                  )}
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="role">Role</Label>
                <Select
                  name="role"
                  options={RoleOptions(role)}
                  onBlur={handleBlur}
                  onChange={option => setFieldValue("role", option.value)}
                />
                {!_.isEmpty([errors.role, validationErrors.role]) &&
                  touched.role && (
                    <FormFeedback style={{ display: "block" }}>
                      {errors.role || validationErrors.role}
                    </FormFeedback>
                  )}
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Col md={2} className="float-right">
              <Button
                disabled={isSubmitting || !isValid}
                size="sm"
                type="submit"
                color="primary"
                block
              >
                {isSubmitting ? "Please Wait..." : "Submit"}
              </Button>
            </Col>
          </FormGroup>
        </div>
      </Form>
    </React.Fragment>
  );
};

export default withFormik({
  mapPropsToValues: props => ({
    firstname: props.firstname,
    lastname: props.lastname,
    email: props.email,
    contact_number: props.contact_number,
    password: props.password,
    is_active: props.is_active,
    role: props.role
  }),
  validationSchema: loginSchema,
  handleSubmit: onSubmit
})(UserForm);
