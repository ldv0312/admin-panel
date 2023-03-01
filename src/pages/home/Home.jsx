import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";

const Home = () => {
  return (
    <div>
      <Sidebar />
      <div className="homeContainer">Home Container</div>
    </div>
  );
};

export default Home;
