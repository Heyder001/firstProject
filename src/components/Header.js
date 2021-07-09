import React from "react";
import "./Header.css";

const Header = (props) => {
  console.log(props);

  return (
    <div className="header">
      <div className="header-sol">
        <h1>START BOOTSTRAP</h1>
      </div>

      <div className="header-sag">
        <ul>
          <li>{props.menuItems.portfolio}</li>
          <li>{props.menuItems.about}</li>
          <li>{props.menuItems.contact}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
