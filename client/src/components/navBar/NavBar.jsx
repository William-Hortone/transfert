import React from "react";
import { FaAlignRight } from "react-icons/fa";
import "./navBar.css";

const NavBar = () => {

  return (
    <>
      <nav className="app__navBar">
      <div className="burger-menu" >
            <FaAlignRight size={24} color="#72141b" />
          </div>
      </nav>
    </>
  );
};

export default NavBar;
