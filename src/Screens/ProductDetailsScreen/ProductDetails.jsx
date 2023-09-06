import React, { useEffect, useMemo, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { CartPlusFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import "./ProductDetails.css";
import { fetchProductById } from "../../Redux/Slices/Products-Slice";
import { addItemToCart } from "../../Redux/Slices/Cart-Slice";
import Product from "../../Components/Product/Product";

const ProductDetails = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const { productId } = useParams();
  const product = useSelector((state) =>
    state.products.find((product) => product.id === parseInt(productId))
  );
  const products = useSelector((state) => state.products);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products.filter(
      (p) => p.category === product?.category && p.id !== parseInt(productId)
    );
  }, [product, products, productId]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!product) dispatch(fetchProductById(productId));
  }, [product, dispatch, productId]);

  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity === 1) return 1;
      return prevQuantity - 1;
    });
  };

  const handleAddItemToCart = () => {
    const newProduct = { ...product, quantity: quantity };
    dispatch(addItemToCart(newProduct));
  };

  return (
    <section className="mt-5">
      <Container>
        {product ? (
          <div className="row">
            <div className="col-md-6 col-sm-12 product-details-img d-flex align-items-center">
              <img
                src={process.env.PUBLIC_URL + product.imageURL}
                alt={product.name}
                className=" w-100"
              />
            </div>
            <div className="col-md-6 col-sm-12 ps-5">
              <div>
                <h3 className="mb-3">{product.name}</h3>
                <strong>
                  <p className="fs-3">${product.price}</p>
                </strong>
                <p>{product.description}</p>
              </div>
              <div className="row mb-5">
                <div className="col-lg-3 col-md-4 col-sm-12 me-3 border border-2 d-flex align-items-center justify-content-between m-0 p-0">
                  <span
                    onClick={decrement}
                    className="quantity-controller border-end border-2 h-100 w-25 d-flex align-items-center justify-content-center"
                  >
                    -
                  </span>
                  <span>{quantity}</span>
                  <span
                    onClick={increment}
                    className="quantity-controller border-start border-2 h-100 w-25 d-flex align-items-center justify-content-center"
                  >
                    +
                  </span>
                </div>
                <div className="col-lg-5 col-md-4 col-sm-12">
                  <Button
                    className="cart-btn rounded-0 pt-2 pb-2 ps-3 pe-3 border-0"
                    onClick={handleAddItemToCart}
                  >
                    <CartPlusFill size={20} /> ADD TO CART
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h1>loading....</h1>
        )}
        <h4 className="products-header mb-4 mt-5">RELATED PRODUCTS</h4>
        <div className="row">
          {relatedProducts &&
            relatedProducts.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
        </div>
      </Container>
    </section>
  );
};

export default ProductDetails;
