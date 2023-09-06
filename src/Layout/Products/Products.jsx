import React, { useEffect, useMemo } from "react";
import Product from "../../Components/Product/Product";
import { Container } from "react-bootstrap";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Redux/Slices/Products-Slice";

const Products = () => {
  const products = useSelector((state) => state.products);
  const category = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("fetch all");
    dispatch(fetchProducts());
  }, []);

  const filteredProducts = useMemo(() => {
    return category
      ? products.filter((product) => product.category === category)
      : products;
  }, [category, products]);

  return (
    <section className="mt-5">
      <Container>
        <h4 className="products-header mb-4">POPULAR PRODUCTS</h4>
        <div className="row">
          {filteredProducts &&
            filteredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </div>
      </Container>
    </section>
  );
};

export default Products;
