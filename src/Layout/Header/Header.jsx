import React from "react";
import { Button, Container } from "react-bootstrap";
import BannerImage from "../../assets/banner-img.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="header text-center mb-5">
      <Container>
        <div className="row d-flex align-items-center">
          <div className="header-content col-lg-6 col-md-6 col-sm-12">
            <div className="header-head">
              <h1>SALES</h1>
            </div>
            <div className="header-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              maiores suscipit quos dicta sunt, maxime facere neque culpa
              dolores, totam dolor.
            </div>
            <div className="header-actions d-flex justify-content-center">
              <Button variant="outline-light">Read More</Button>
              <Button variant="light">Shop Now</Button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 header-img">
            <img src={BannerImage} alt="banner"/>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
