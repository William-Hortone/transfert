import React from "react";
import { FaAlignRight } from "react-icons/fa";
import "./navBar.css";
import images from '../../constants/images'

const NavBar = () => {
  return (
    <>
      <nav className="app__navBar">
        <div className="app__navBar-logo">
          <img src={images.logo} alt="logo" />
        </div>

        <div className="app__navbar-connection displayFlex">
          <button className="btn-connection">Se connecter</button>
          <button className="btn-connection btn-primary">S'inscrire</button>
        </div>
        {/* <div className="burger-menu">
          <FaAlignRight size={24} color="#72141b" />
        </div> */}
      </nav>
    </>
  );
};

export default NavBar;
