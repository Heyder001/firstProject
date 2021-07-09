import React from "react";
import Header from "./components/Header";
import Avatar from "./components/Avatar";
import Portfolio from "./components/Portfolio";
import Hero from "./components/Hero";
import Contack from "./components/Contack";

function App() {
  const menuItems = {
    portfolio: "Portfolio",
    about: "About",
    contact: "Contact",
  };

  return (
    <div className="App">
      <Header menuItems={menuItems} />
      <Avatar />
      <Portfolio />
      <Hero />
      <Contack />
    </div>
  );
}

export default App;
