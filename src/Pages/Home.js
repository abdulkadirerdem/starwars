import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="header-text" >Star Wars API</h1>
      <div className="route-container">
        <Link className="people-route" to="/people">
          People
        </Link>
        <Link className="starships-route" to="/starships">
          Starships
        </Link>
      </div>
    </div>
  );
};

export default Home;
