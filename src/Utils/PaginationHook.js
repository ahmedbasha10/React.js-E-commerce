import { useMemo, useState } from "react";

const usePagination = (Products) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const totalPages = useMemo(() => {
    return Math.ceil(Products.length / itemsPerPage);
  }, [Products, itemsPerPage]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return Products?.slice(startIndex, endIndex);
  }, [Products, itemsPerPage, currentPage]);

  return [
    currentPage,
    itemsPerPage,
    totalPages,
    paginatedProducts,
    setCurrentPage,
    setItemsPerPage,
  ];
};

export default usePagination;
