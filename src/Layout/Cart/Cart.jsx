import React, { useMemo } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import CartItem from "../../Components/CartItem/CartItem";
import { useCart } from "../../Utils/Context";
import { useSelector } from "react-redux";

const Cart = () => {
  const { showCart, setShowCart } = useCart();
  const cart = useSelector((state) => state.cart);

  const totalPrice = useMemo(() => {
    if (cart.length === 0) {
      return 0;
    }
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cart]);

  const handleClose = () => {
    setShowCart(false);
  };

  return (
    <Offcanvas show={showCart} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>SHOPPING CART</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="d-flex flex-column justify-content-between">
        <div>
          {cart && cart.length === 0 ? (
            <div>
              <img src="/assets/Empty-cart.jpeg" alt="empty cart" className="w-100 h-100"/>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id}>
                <CartItem product={item} />
                <hr />
              </div>
            ))
          )}
        </div>
        <div className="total-price">
          <hr />
          <p>
            <span className="fw-bold fs-5">SUBTOTAL:</span>{" "}
            <span className="fw-bold fs-5 ms-5">${totalPrice}</span>
          </p>
          <hr />
          <Button className="cart-btn rounded-0 border-0 w-100 fs-5 fw-bold">
            CHECKOUT
          </Button>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
