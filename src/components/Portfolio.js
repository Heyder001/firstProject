import React from "react";
import "./Header.css";
import ev from "./img/download.png"

const Portfolio = () => {
  return (
    <div className="portfolo">
      <div className="port-text">
              <h1>PORTFOLIO</h1>
              <i class="fas fa-star"></i>
          </div>
          <div className="portfo-image">
              <img src={ev} alt="" />
              <img src={ev} alt="" />
              <img src={ev} alt="" />
              <img src={ev} alt="" />
              <img src={ev} alt="" />
              <img src={ev} alt="" />
          </div>
    </div>
  );
};

export default Portfolio;
