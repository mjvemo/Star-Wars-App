import React from "react";
import { Link } from "react-router-dom";

import "./PeopleCard.css";

function PeopleCard({ people }) {
  return (
    <div className="people-card">
      <Link to={`/people/${people.id}`}>
        <img src={people.image} alt={people.name}></img>
        <h3>{people.name}</h3>
        <p>{people.homeworld}</p>
      </Link>
    </div>
  );
}

export default PeopleCard;
