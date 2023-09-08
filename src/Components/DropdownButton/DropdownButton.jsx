import React from "react";
import { Dropdown } from "react-bootstrap";

const DropdownButton = ({ itemsPerPage, setItemsPerPage }) => {
  return (
    <Dropdown className="mb-3">
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        {itemsPerPage}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => setItemsPerPage(4)}>4</Dropdown.Item>
        <Dropdown.Item onClick={() => setItemsPerPage(8)}>8</Dropdown.Item>
        <Dropdown.Item onClick={() => setItemsPerPage(16)}>16</Dropdown.Item>
        <Dropdown.Item onClick={() => setItemsPerPage(20)}>20</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownButton;
