import React from "react";
import { Pagination } from "react-bootstrap";

const PaginationList = ({ currentPage, totalPages, setCurrentPage }) => {
  return (
    <Pagination className="mt-4 justify-content-center">
      <Pagination.First onClick={() => setCurrentPage(1)} />
      <Pagination.Prev
        onClick={() => {
          if (currentPage > 1) setCurrentPage((prevValue) => prevValue - 1);
        }}
      />
      {Array.from({ length: totalPages }).map((_, index) => (
        <Pagination.Item
          key={index}
          active={currentPage === index + 1}
          onClick={() => setCurrentPage(index + 1)}
        >
          {index + 1}
        </Pagination.Item>
      ))}
      <Pagination.Next
        onClick={() => {
          if (currentPage < totalPages)
            setCurrentPage((prevValue) => prevValue + 1);
        }}
      />
      <Pagination.Last onClick={() => setCurrentPage(totalPages)} />
    </Pagination>
  );
};

export default PaginationList;
