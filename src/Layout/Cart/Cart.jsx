import React from "react";
import { Offcanvas } from "react-bootstrap";
import CartItem from "../../Components/CartItem/CartItem";
import { useCart } from "./CartContext";
import { useSelector } from "react-redux";

const Cart = () => {
  const { showCart, setShowCart } = useCart();
  const cart = useSelector((state) => state.cart);

  const handleClose = () => {
    setShowCart(false);
  };

  return (
    <Offcanvas show={showCart} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>SHOPPING CART</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cart &&
          cart.map((item) => (
            <div key={item.id}>
              <CartItem product={item}/>
              <hr />
            </div>
          ))}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
