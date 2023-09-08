import React from "react";
import { Container } from "react-bootstrap";
import "./Categories.css";
import { useDispatch } from "react-redux";
import { setCategory } from "../../Redux/Slices/Categories-Slice";

const Categories = () => {
  const dispatch = useDispatch();
  const categories = ["Headphone", "Airpods", "Speaker", "Smartwatch"];

  return (
    <section className="mb-5">
      <Container>
        <div className="categories-content d-flex justify-content-between flex-wrap">
          {categories.length > 0 &&
            categories.map((category, index) => (
              <div
                className="category-card"
                key={index}
                onClick={() => {
                  dispatch(setCategory(category));
                }}
              >
                <div className={`img-handler ${category}`}></div>
              </div>
            ))}
        </div>
      </Container>
    </section>
  );
};

export default Categories;
