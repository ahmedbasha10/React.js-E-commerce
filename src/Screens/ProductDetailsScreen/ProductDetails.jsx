import React, { useEffect, useMemo } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import "./ProductDetails.css";
import { fetchProductById } from "../../Redux/Slices/Products-Slice";
import Product from "../../Components/Product/Product";
import ProductDetailsComponent from "../../Components/ProductDetails/ProductDetailsComponent";
import Spinner from 'react-bootstrap/Spinner';

const ProductDetails = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const { productId } = useParams();
  const product = useSelector((state) =>
    state.products.data.find((product) => product.id === parseInt(productId))
  );

  const isLoading = useSelector((state) => state.products.loading);

  const products = useSelector((state) => state.products);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products.data.filter(
      (p) => p.category === product?.category && p.id !== parseInt(productId)
    );
  }, [product, products, productId]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!product) dispatch(fetchProductById(productId));
  }, [product, dispatch, productId]);

  return (
    <section className="mt-5">
      <Container>
        {isLoading ? (
          <div className="text-center">
            <Spinner animation="border"/>
          </div>
        ) : product ? (
          <ProductDetailsComponent product={product} />
        ) : (
          <h1>Not Found</h1>
        )}
        {relatedProducts.length > 0 && (
          <>
            <h4 className="products-header mb-4 mt-5">RELATED PRODUCTS</h4>
            <div className="row">
              {relatedProducts.map((product) => {
                return <Product key={product.id} product={product} />;
              })}
            </div>
          </>
        )}
      </Container>
    </section>
  );
};

export default ProductDetails;
