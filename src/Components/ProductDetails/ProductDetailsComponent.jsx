import React, { useState } from "react";
import { addItemToCart } from "../../Redux/Slices/Cart-Slice";
import { useDispatch } from "react-redux";
import { Button, Col, Row } from "react-bootstrap";
import { CartPlusFill } from "react-bootstrap-icons";

const ProductDetailsComponent = ({ product }) => {
  const dispatch = useDispatch();
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
    <Row>
      <Col md={6} sm={12} className="product-details-img d-flex align-items-center">
        <img
          src={process.env.PUBLIC_URL + product.imageURL}
          alt={product.name}
          className="w-100"
        />
      </Col>
      <Col md={6} sm={12} className="ps-5">
        <div>
          <h3 className="mb-3">{product.name}</h3>
          <strong>
            <p className="fs-3">${product.price}</p>
          </strong>
          <p>{product.description}</p>
        </div>
        <Row className="mb-5">
          <Col
            lg={4}
            md={6}
            sm={4}
            xs={5}
            className="border border-2 d-flex align-items-center justify-content-between m-0 p-0"
          >
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
          </Col>
          <Col lg={6} md={6} sm={8} xs={7}>
            <Button
              className="cart-btn rounded-0 border-0"
              onClick={handleAddItemToCart}
            >
              <CartPlusFill size={20} /> ADD TO CART
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ProductDetailsComponent;
