import React, { useEffect, useState } from "react";
import "./Starship.css";

const Starship = () => {
  const [loading, setLoading] = useState(false);
  const [starships, setStarships] = useState();

  useEffect(async () => {
    let vehicles = [];
    for (let i = 1; i < 5; i++) {
      const url = "http://swapi.dev/api/starships/?page=" + i;
      const response = await fetch(url);
      const data = await response.json();
      {
        data.results.map((a) => {
          vehicles.push(a);
        });
      }
    }
    setStarships(vehicles);
  }, []);
  console.log("Starshiphs -- >", starships);
  return (
    <div className="container">
      {loading || !starships == null ? (
        <div>loading...</div>
      ) : (
        <div className="card-container">
          <h1 className="starships-header">..starships from Star Wars</h1>
          {starships.map((items, index) => (
            <div key={index} className="starship-card">
              <h1 className="starship-name">{items.name}</h1>
              <div className="info-container">
                <div className="info info-1">
                  <p>
                    <b>Model: </b>
                    {items.model}
                  </p>
                  <p>
                    <b>Starship Class: </b>
                    {items.starship_class}
                  </p>
                  <p>
                    <b>Manufacturer: </b>
                    {items.manufacturer}
                  </p>
                </div>
                <div className="info info-2">
                  <p>
                    <b>Crew: </b>
                    {items.crew}
                  </p>
                  <p>
                    <b>Passengers: </b>
                    {items.passengers}
                  </p>
                  <p>
                    <b>Cargo Capacity: </b>
                    {items.cargo_capacity}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Starship;
