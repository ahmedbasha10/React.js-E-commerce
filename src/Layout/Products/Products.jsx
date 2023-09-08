import React, { useEffect, useMemo, useState } from "react";
import Product from "../../Components/Product/Product";
import { Container, Dropdown, Pagination, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Redux/Slices/Products-Slice";
import { useSearch } from "../../Utils/Context";
import "./Products.css";
import { set } from "lodash";

const Products = () => {
  const products = useSelector((state) => state.products);
  const category = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const { search } = useSearch();

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = category
      ? products.data.filter((product) => product.category === category)
      : products.data;

    if (search) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return filtered;
  }, [category, products, search]);

  const totalPages = useMemo(() => {
    return Math.ceil(filteredProducts.length / itemsPerPage);
  }, [filteredProducts, itemsPerPage]);

  const ProductsToDisplay = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredProducts?.slice(startIndex, endIndex);
  }, [filteredProducts, itemsPerPage, currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="mt-5">
      <Container>
        <h4 className="products-header mb-4">POPULAR PRODUCTS</h4>
        <Dropdown className="mb-3">
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            products per page
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setItemsPerPage(4)}>4</Dropdown.Item>
            <Dropdown.Item onClick={() => setItemsPerPage(8)}>8</Dropdown.Item>
            <Dropdown.Item onClick={() => setItemsPerPage(16)}>
              16
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setItemsPerPage(20)}>
              20
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {products?.loading ? (
          <div className="text-center">
            <Spinner animation="border" />
          </div>
        ) : products?.error ? (
          <h1>Error... {products.error}</h1>
        ) : (
          <div className="row">
            {ProductsToDisplay &&
              ProductsToDisplay.map((product) => (
                <Product key={product.id} product={product} />
              ))}
          </div>
        )}
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
              onClick={() => handlePageChange(index + 1)}
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
      </Container>
    </section>
  );
};

export default Products;
