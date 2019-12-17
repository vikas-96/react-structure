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

const userSchema = props => {
  let password_schema,
    confirm_password_schema = "";
  if (props.isCreate) {
    console.log("password");
    password_schema = yup
      .string()
      .trim()
      .required("Password is a required field.");
    confirm_password_schema = yup
      .string()
      .trim()
      .oneOf([yup.ref("password"), null], "Passwords must match.")
      .required("Password confirm is required.");
  }

  return yup.object().shape({
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
    password: password_schema,
    confirm_password: confirm_password_schema,
    is_active: yup
      .string()
      .trim()
      .required("Status is a required field."),
    role: yup
      .string()
      .trim()
      .required("Role is a required field.")
  });
};

const onSubmit = async (
  values,
  { props, setSubmitting, setErrors, setStatus }
) => {
  try {
    setSubmitting(true);
    console.log(values);
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
    values,
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
                  defaultValue={values.firstname}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  invalid={
                    Boolean(touched.firstname && errors.firstname) ||
                    validationErrors.firstname
                  }
                  valid={!!(touched.firstname && !errors.firstname)}
                />
                <FormFeedback>
                  {errors.firstname || validationErrors.firstname}
                </FormFeedback>
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
                  defaultValue={values.lastname}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  invalid={
                    Boolean(touched.lastname && errors.lastname) ||
                    validationErrors.lastname
                  }
                  valid={!!(touched.lastname && !errors.lastname)}
                />
                <FormFeedback>
                  {errors.lastname || validationErrors.lastname}
                </FormFeedback>
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
                  defaultValue={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  invalid={
                    Boolean(touched.email && errors.email) ||
                    validationErrors.email
                  }
                  valid={!!(touched.email && !errors.email)}
                />
                <FormFeedback>
                  {errors.email || validationErrors.email}
                </FormFeedback>
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
                  defaultValue={values.contact_number}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  invalid={
                    Boolean(touched.contact_number && errors.contact_number) ||
                    validationErrors.contact_number
                  }
                  valid={!!(touched.contact_number && !errors.contact_number)}
                />
                <FormFeedback>
                  {errors.contact_number || validationErrors.contact_number}
                </FormFeedback>
              </FormGroup>
            </Col>
            {props.isCreate && (
              <div>
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
                      invalid={
                        Boolean(touched.password && errors.password) ||
                        validationErrors.password
                      }
                      valid={!!(touched.password && !errors.password)}
                    />
                    <FormFeedback>
                      {errors.password || validationErrors.password}
                    </FormFeedback>
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
                      invalid={
                        Boolean(
                          touched.confirm_password && errors.confirm_password
                        ) || validationErrors.confirm_password
                      }
                      valid={
                        !!(touched.confirm_password && !errors.confirm_password)
                      }
                    />
                    <FormFeedback>{errors.confirm_password}</FormFeedback>
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
                  onBlur={handleBlur}
                  onChange={option => setFieldValue("is_active", option.value)}
                  value={ActiveOptions.find(
                    option => option.value === values.is_active
                  )}
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
                  value={RoleOptions(role).find(
                    option => option.value === values.role
                  )}
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
              <Button size="sm" type="submit" color="primary" block>
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
    ...props.userData
  }),
  validationSchema: userSchema,
  handleSubmit: onSubmit
})(UserForm);
