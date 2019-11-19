import React from "react";
import { Navbar, Nav, Label } from "reactstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Navbar color="light" light expand="md">
        <Nav>
          <Label>© Keibank</Label>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Footer;
