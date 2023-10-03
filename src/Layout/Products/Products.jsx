import React, { useMemo, useState } from "react";
import Product from "../../Components/Product/Product";
import { Container, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import usePagination from "../../Utils/PaginationHook";
import DropdownButton from "../../Components/DropdownButton/DropdownButton";
import PaginationList from "../../Components/PaginationList/PaginationList";
import SearchBar from "../../Components/SearchBar/SearchBar";
import "./Products.css";
import { useGetProductsQuery } from "../../Redux/Slices/productsApi-slice";

const Products = () => {
  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useGetProductsQuery();
  // const products = useSelector((state) => state.products);
  const category = useSelector((state) => state.categories);
  // const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, []);

  const filteredProducts = useMemo(() => {
    let filtered = category
      ? products.filter((product) => product.category === category)
      : products;

    if (search) {
      const trimmedSearch = search.trim();
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(trimmedSearch.toLowerCase())
      );
    }
    return filtered;
  }, [category, products, search]);

  const [
    currentPage,
    itemsPerPage,
    totalPages,
    paginatedProducts,
    setCurrentPage,
    setItemsPerPage,
  ] = usePagination(filteredProducts);

  const handleSearch = (searchValue) => {
    setSearch(searchValue);
  };

  return (
    <section className="mt-5">
      <Container>
        <div className="d-flex justify-content-between">
          <h4 className="products-header mb-4">POPULAR PRODUCTS</h4>
          <SearchBar onSearch={handleSearch} />
          <DropdownButton
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
          />
        </div>
        {isLoading ? (
          <div className="text-center">
            <Spinner animation="border" />
          </div>
        ) : isError ? (
          <h1>Error... {error.error}</h1>
        ) : (
          <div className="row">
            {paginatedProducts &&
              paginatedProducts.map((product) => (
                <Product key={product.id} product={product} />
              ))}
          </div>
        )}
        {/* contains pagination pages to move between them */}
        <PaginationList
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </Container>
    </section>
  );
};

export default Products;
