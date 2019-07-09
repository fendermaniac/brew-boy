import React from "react";
import "./Home.css";

const Home = ({ breweries }) => {
  return (
    <div className="home-container">
      {breweries.map(brewery => {
        return ( <div className="card" key={brewery.id}>
          <h2>{brewery.name}</h2>
          <address>{`${brewery.street}`}<br/>{`${brewery.city}, ${brewery.state}`}</address>
          <div>
          <iframe src={`http://maps.google.com/maps?q=${brewery.name}, ${brewery.street}, ${brewery.city}, ${brewery.state}&z=15&output=embed`} width="360" height="270" frameBorder="0"></iframe>
          </div>
        </div>)
       
      })}
    </div>
  );
};

export default Home;
