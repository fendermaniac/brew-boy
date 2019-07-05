import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="card">
        <h1>Public Recipes</h1>
      </div>
      <div className="card">
        <h1>My Recipes</h1>
      </div>
      <div className="card">
        <h1>Tools</h1>
      </div>
    </div>
  );
};

export default Home;
