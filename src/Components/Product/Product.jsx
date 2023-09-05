import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="product-card col-lg-3 col-md-6 col-sm-12 mb-4">
      <Link to={`/product/${product.id}`}>
        <div className="product-image mb-3">
          <img
            src={process.env.PUBLIC_URL + product.imageURL}
            alt={product.name}
          />
        </div>
      </Link>
      <div className="product-name">
        {product.name.length >= 30 ? (
          <p>{product.name.substring(0, 30)}...</p>
        ) : (
          <p>{product.name}</p>
        )}
      </div>
      <div className="product-price">
        <strong>
          <p>${product.price}</p>
        </strong>
      </div>
    </div>
  );
};

export default Product;
