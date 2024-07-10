import React from "react";
import "./header.css";
import PreHeader from "../preHeader/PreHeader";
import NavBar from "../navBar/NavBar";
import CircularTextAnimation from "../textAnimation/CircularText";

const Header = () => {
  return (
    <>
      <div className="app__header">
        <PreHeader />
        <NavBar />

        <div className="app__header-container">
          <CircularTextAnimation />
        </div>
      </div>
    </>
  );
};

export default Header;
