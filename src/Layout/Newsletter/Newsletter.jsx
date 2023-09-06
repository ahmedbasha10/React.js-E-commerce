import React from "react";
import { Button, Container } from "react-bootstrap";
import { Facebook, Twitter, Instagram, Linkedin } from "react-bootstrap-icons";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <section className="mt-5 Newsletter">
      <Container className="h-100 d-flex align-items-center">
        <div className="text-center m-auto Newsletter-content">
          <p>NEWSLETTER</p>
          <h4 className="mb-3">SIGN UP FOR LATEST UPDATES AND OFFERS</h4>
          <form className="mb-2">
            <input type="email" name="email" id="email" className="me-3 w-50 p-1 pb-2 border border-secondary" placeholder="Email" />
            <Button type="submit" className="cart-btn rounded-0 border-0 p-2 pe-3 ps-3">Subscribe</Button>
          </form>
          <p>Will be used in accordance with our Privacy Policy</p>
          <div className="d-flex justify-content-center gap-3">
            <Facebook size={25} className="social-icon"/>
            <Twitter size={25} className="social-icon"/>
            <Instagram size={25} className="social-icon"/>
            <Linkedin size={25} className="social-icon"/>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
