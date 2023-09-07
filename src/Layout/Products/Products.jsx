import React, { useEffect, useMemo } from "react";
import Product from "../../Components/Product/Product";
import { Container, Spinner } from "react-bootstrap";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Redux/Slices/Products-Slice";
import { useSearch } from "../../Components/Navbar/SearchContext";

const Products = () => {
  const products = useSelector((state) => state.products);
  const category = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const { search } = useSearch();

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

  return (
    <section className="mt-5">
      <Container>
        <h4 className="products-header mb-4">POPULAR PRODUCTS</h4>
        {products?.loading ? (
          <div className="text-center">
            <Spinner animation="border" />
          </div>
        ) : products?.error ? (
          <h1>Error... {products.error}</h1>
        ) : (
          <div className="row">
            {filteredProducts &&
              filteredProducts.map((product) => (
                <Product key={product.id} product={product} />
              ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default Products;
