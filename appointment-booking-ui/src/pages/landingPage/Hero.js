import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import Card from "../../components/card/Card.js";

const Hero = () => {
  const HEADER_PRIMARY_TEXT = "Book Appointments Seamlessly";
  const HEADER_SECONDARY_TEXT = "Hassle-free appointment scheduling made easy. Book and manage your appointments with ease.";

  return (
    <section>
      <Card>
        <div className="hero-container">
          <div className="hero-text">
            <a href="/">
              <h2 className="primary-text">{HEADER_PRIMARY_TEXT}</h2>
            </a>
            <p className="secondary-text ">{HEADER_SECONDARY_TEXT}</p>
            <div className="cta-buttons">
            <Link to="/register" className="btn primary-btn">Get Started</Link>
          </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default Hero;
