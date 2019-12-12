import React from "react";
import { Navbar, Nav, Label } from "reactstrap";

const Footer = () => {
  return (
    <div>
      <Navbar color="light" light expand="md" className="footer">
        <Nav>
          <Label>© Keibank</Label>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Footer;
