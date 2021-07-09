import React from "react";
import "./Header.css";
import cabin from "./img/oglansekli.svg"

const Avatar = () => {
  return (
    <div className="container">
      <div className="container-image">
        <img src={cabin} alt="" />
      </div>
      <div className="container-text">
        <h1>START BOOTSTRAP</h1>
        <i class="fas fa-star"></i>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>

      
    </div>
  );
};

export default Avatar;
