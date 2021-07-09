import React from "react";
import "./Header.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-icon">
        <h1>ABOUT</h1>
        <i class="fas fa-star"></i>
      </div>
      <div className="hero-text">
        <div>
          Freelancer is a free bootstrap theme created by Start Bootstrap. The
          download includes the complete source files including HTML, CSS, and
          JavaScript as well as optional SASS stylesheets for easy
          customization.
        </div>
        <div>
          Freelancer is a free bootstrap theme created by Start Bootstrap. The
          download includes the complete source files including HTML, CSS, and
          JavaScript as well as optional SASS stylesheets for easy
          customization.
        </div>
      </div>
      <div className="button">
        <button>FREE DOWNLOAD</button>
      </div>
    </div>
  );
};

export default Hero;
