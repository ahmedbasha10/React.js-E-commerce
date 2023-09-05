import React from "react";
import { Trash3Fill } from "react-bootstrap-icons";
import "./CartItem.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  deleteItem,
  incrementQuantity,
} from "../../Redux/Slices/Cart-Slice";

const CartItem = ({ product }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="d-flex justify-content-between">
      <div className="item-img w-25 me-2 d-flex align-items-center">
        <img
          src={process.env.PUBLIC_URL + product?.imageURL}
          width="100%"
          alt="ss"
        />
      </div>
      <div className="item-info w-75">
        <h6 className="mb-3">{product?.name}</h6>
        <div className="me-3 mb-3 w-75 border border-2 d-flex align-items-center justify-content-between m-0 p-0">
          <span
            onClick={() => dispatch(decrementQuantity(product?.id))}
            className="quantity-controller border-end border-2 h-100 w-25 d-flex align-items-center justify-content-center p-2"
          >
            -
          </span>
          <span>{product?.quantity}</span>
          <span
            onClick={() => dispatch(incrementQuantity(product?.id))}
            className="quantity-controller border-start border-2 h-100 w-25 d-flex align-items-center justify-content-center p-2"
          >
            +
          </span>
        </div>
        <p>{product?.price}</p>
      </div>
      <div className="delete d-flex align-items-center pb-4">
        <Trash3Fill
          size={30}
          className="trash-icon"
          onClick={() => dispatch(deleteItem(product.id))}
        />
      </div>
    </div>
  );
};

export default CartItem;
