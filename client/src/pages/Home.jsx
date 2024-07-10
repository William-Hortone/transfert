import React from "react";
import { Header, NavBar, PreHeader } from "../components";
import "./home.css";

const Home = () => {
  return (
    <div className="app__home">
      <PreHeader />
      <Header />
      <NavBar />

    </div>
  );
};

export default Home;