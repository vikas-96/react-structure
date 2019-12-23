import React from "react";
import { Form, Button, FormGroup, Input, Label, Row, Col } from "reactstrap";
import Select from "react-select";
import SimpleReactValidator from "simple-react-validator";
import ContactHoc from "../../HOC/Contact";

const CountryOptions = [
  { value: "india", label: "India" },
  { value: "america", label: "America" }
];

class Contactus extends React.Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
  }

  handleSubmit = async e => {
    e.preventDefault();

    if (!this.validator.allValid()) {
      this.validator.showMessages();
      return false;
    }
    try {
      this.props.setSubmitting(true);
      console.log(this.props);
      //   await this.props.submitHandler(this.props.contactDetails);
      // this.validator.hideMessageFor("Name");
      console.log("resetup");
      console.log(this.addContactForm);
      this.props.resetForm();
      console.log("reset");
      this.validator.hideMessages();
      this.props.setSubmitting(false);
    } catch (error) {
      this.props.setSubmitting(false);
      return false;
    }
  };

  render() {
    this.validator.purgeFields();
    // console.log(this.props);
    const { name, email, country, phone } = this.props.contactDetails;

    return (
      <React.Fragment>
        <Form
          onSubmit={this.handleSubmit}
          innerRef={form => (this.addContactForm = form)}
        >
          <div className="container-fluid">
            <Row>
              <Col md={3}>
                <FormGroup>
                  <Label for="name">First Name</Label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    autoComplete="off"
                    value={name}
                    onChange={this.props.handleChange}
                    onBlur={() => this.validator.showMessageFor("Name")}
                  />
                  {this.validator.message("Name", name, "required|alpha_space")}
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    autoComplete="off"
                    value={email}
                    onChange={this.props.handleChange}
                    onBlur={() => this.validator.showMessageFor("Email")}
                  />
                  {this.validator.message("Email", email, "required|email")}
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="country">Country</Label>
                  <Select
                    name="country"
                    placeholder="Your Country"
                    options={CountryOptions}
                    value={CountryOptions.find(
                      option => option.value === country
                    )}
                    onChange={this.props.handleSelect}
                    onBlur={() => this.validator.showMessageFor("Country")}
                  />
                  {this.validator.message("Country", country, "required")}
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="phone">Phone Number</Label>
                  <Input
                    type="number"
                    name="phone"
                    placeholder="Your Phone Number"
                    autoComplete="off"
                    value={phone}
                    onChange={this.props.handleChange}
                    onBlur={() => this.validator.showMessageFor("Phone")}
                  />
                  {this.validator.message("Phone", phone, "required|numeric")}
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Col md={2} className="float-right">
                <Button size="sm" type="submit" color="primary" block>
                  {this.props.isSubmitting ? "Please Wait" : "Submit"}
                </Button>
              </Col>
            </FormGroup>
          </div>
        </Form>
      </React.Fragment>
    );
  }
}

export default ContactHoc(Contactus);
