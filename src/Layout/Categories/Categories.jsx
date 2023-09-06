import React from "react";
import { Container } from "react-bootstrap";
import "./Categories.css";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../Redux/Slices/Categories-Slice";

const Categories = () => {
  const dispatch = useDispatch();

  return (
    <section className="mb-5">
      <Container>
        <div className="categories-content d-flex justify-content-between flex-wrap">
          <div
            className="category-card"
            onClick={() => {
              dispatch(setCategory("Headphone"));
            }}
          >
            <div className="img-handler Headphone"></div>
          </div>
          <div
            className="category-card"
            onClick={() => {
              dispatch(setCategory("Airpods"));
            }}
          >
            <div className="img-handler WireleesAirbods"></div>
          </div>
          <div
            className="category-card"
            onClick={() => {
              dispatch(setCategory("Speaker"));
            }}
          >
            <div className="img-handler BluetoothSpeakers"></div>
          </div>
          <div
            className="category-card"
            onClick={() => {
              dispatch(setCategory("Smartwatch"));
            }}
          >
            <div className="img-handler SmartWatches"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Categories;
