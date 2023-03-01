import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";

const Home = () => {
  return (
    <div>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        Home Container
      </div>
    </div>
  );
};

export default Home;
