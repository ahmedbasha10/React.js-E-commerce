import React, { useRef } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

const SearchBar = ({ onSearch }) => {
  const searchRef = useRef();

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchRef.current.value);
  };

  return (
    <Form inline="true">
      <Row>
        <Col xs="auto" className="pe-0">
          <Form.Control type="text" className="mr-sm-2" ref={searchRef} />
        </Col>
        <Col xs="auto" className="ps-0">
          <Button
            type="submit"
            className="text-dark bg-transparent border-0 m-0"
            onClick={handleSearch}
          >
            <Search size={20} />
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBar;
