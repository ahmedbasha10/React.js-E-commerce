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
            className="category-card Headphone"
            onClick={() => {
              dispatch(setCategory("Headphone"));
            }}
          ></div>
          <div
            className="category-card WireleesAirbods"
            onClick={() => {
              dispatch(setCategory("Airpods"));
            }}
          ></div>
          <div
            className="category-card BluetoothSpeakers"
            onClick={() => {
              dispatch(setCategory("Speaker"));
            }}
          ></div>
          <div
            className="category-card SmartWatches"
            onClick={() => {
              dispatch(setCategory("Smartwatch"));
            }}
          ></div>
        </div>
      </Container>
    </section>
  );
};

export default Categories;
