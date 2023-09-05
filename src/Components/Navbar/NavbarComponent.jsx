import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Search, Heart, Cart } from "react-bootstrap-icons";
import "./NavbarComponent.css";

const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-dark p-3" fixed>
      <Container>
        <Navbar.Brand href="#home" className="text-light">
          Basha Shop
        </Navbar.Brand>
        <Navbar.Toggle
          className="bg-light"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-light" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="text-light" href="/">
              About
            </Nav.Link>
            <Nav.Link className="text-light" href="/">
              Categories
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="text-light">
              <Search size="20px" />
            </Nav.Link>
            <Nav.Link className="text-light">
              <Heart size="20px" />
            </Nav.Link>
            <Nav.Link className="text-light">
              <Cart size="20px" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
