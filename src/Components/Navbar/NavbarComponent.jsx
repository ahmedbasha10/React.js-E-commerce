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
import { Search, Cart, Person } from "react-bootstrap-icons";
import { useCart } from "../../Utils/Context";
import { useSearch } from "../../Utils/Context";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../Redux/Slices/Auth-Slice";
import "./NavbarComponent.css";

const NavbarComponent = () => {
  const user = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart[user.user?._id]);
  const dispatch = useDispatch();
  const { showCart, setShowCart } = useCart();
  const { setSearch } = useSearch();
  const searchRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  const toggleCart = () => {
    // check if there is a user first
    if (user.token) {
      setShowCart(!showCart);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // move to home page to show the products he searched for
    if (location.pathname !== "/") {
      navigate("/");
    }
    setSearch(searchRef.current.value);
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-dark p-3">
      <Container>
        <Navbar.Brand href="/" className="text-light">
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
            {user.token && (
              <Nav.Link className="text-light" onClick={toggleCart}>
                <Cart size="20px" /> <Badge bg="primary">{cart?.length}</Badge>
              </Nav.Link>
            )}

            {user.token ? (
              <>
                <Nav.Link className="text-light">{user.user.username}</Nav.Link>
                <Button
                  className="text-light bg-dark border-0"
                  onClick={() => dispatch(logout())}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Nav.Link className="text-light" href={"/user"}>
                <Person size={30} />
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
