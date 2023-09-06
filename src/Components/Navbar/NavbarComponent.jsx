import React, { useRef } from "react";
import {
  Badge,
  Button,
  Col,
  Container,
  Form,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import { Search, Heart, Cart } from "react-bootstrap-icons";
import { useCart } from "../../Layout/Cart/CartContext";
import { useSearch } from "./SearchContext";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import "./NavbarComponent.css";

const NavbarComponent = () => {
  const cart = useSelector((state) => state.cart);
  const { showCart, setShowCart } = useCart();
  const { setSearch } = useSearch();
  const searchRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
    }
    setSearch(searchRef.current.value);
  };

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
            <Form inline="true">
              <Row>
                <Col xs="auto" className="pe-0">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2"
                    ref={searchRef}
                  />
                </Col>
                <Col xs="auto" className="ps-0">
                  <Button
                    type="submit"
                    className="text-light bg-transparent border-0 m-0"
                    onClick={handleSearch}
                  >
                    <Search size={20} />
                  </Button>
                </Col>
              </Row>
            </Form>
            <Nav.Link className="text-light">
              <Heart size="20px" />
            </Nav.Link>
            <Nav.Link className="text-light" onClick={toggleCart}>
              <Cart size="20px" /> <Badge bg="primary">{cart?.length}</Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
