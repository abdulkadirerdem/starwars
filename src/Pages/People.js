import React, { useState, useEffect } from "react";
import "./People.css";

const People = () => {
  const [loading, setLoading] = useState(false);
  const [people, setPeople] = useState([]);
  var users = [];
  useEffect(async () => {
    let users = [];
    for (let i = 1; i < 10; i++) {
      const url = "https://swapi.dev/api/people/?page=" + i;
      const response = await fetch(url);
      const data = await response.json();
      {
        data.results.map((a) => {
          users.push(a);
        });
      }
    }
    setPeople(users);
  }, []);

  console.log("fdaafdsasfd-- >", people);
  return (
    <div className="container">
      {loading || !people == null ? (
        <div>loading...</div>
      ) : (
        <div className="card-container">
          <h1 className="people-header">..people from Star Wars</h1>
          {people.map((items, index) => (
            <div key={index} className="person-card">
              <h1 className="person-name">{items.name}</h1>
              <div className="info-container">
                <div className="info info-1">
                  <p>
                    <b>Gender: </b>
                    {items.gender}
                  </p>
                  <p>
                    {" "}
                    <b>Birtday year: </b>
                    {items.birth_year}
                  </p>
                  <p>
                    <b>Height: </b>
                    {items.height}
                  </p>
                  <p>
                    <b>Mass: </b>
                    {items.mass}
                  </p>
                </div>
                <div className="info info-2">
                  <p>
                    <b>Eye Color: </b>
                    {items.eye_color}
                  </p>
                  <p>
                    <b>Hair Color: </b>
                    {items.hair_color}
                  </p>
                  <p>
                    <b>Skin Color: </b>
                    {items.skin_color}
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

export default People;
