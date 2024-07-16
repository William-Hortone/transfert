import React from "react";
import "./header.css";
import PreHeader from "../preHeader/PreHeader";
import NavBar from "../navBar/NavBar";
import CircularTextAnimation from "../textAnimation/CircularText";
import images from "../../constants/images";

const Header = () => {
  return (
    <>
      <div className="app__header">
        <PreHeader />
        <NavBar />

        <div className="app__header-container">
          <div className="header-content">
            <h2>Transfert</h2>
            <h2>D'argent fiable</h2>
          </div>

          <CircularTextAnimation />
          {/* <div className="header-content-img">
            <img src={images.image2} alt="banier" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Header;
