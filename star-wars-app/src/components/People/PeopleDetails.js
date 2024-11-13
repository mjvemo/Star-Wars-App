import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./PeopleDetails.css";

function PeopleDetails() {
  const { id } = useParams();
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get(`http https://swapi.dev/api/people/${id}`)
      // le asigno respuesta del API a setpeople();
      .then((response) => setPeople(response.data));
  }, [id]);

  if (!people) return <p>Cargando people...</p>;

  return (
    <div className="people-detail">
      <h2>{people.name}</h2>
      <img src={people.image} alt={people.tittle} />
      <p>{people.birth_year}</p>
      <p>{people.eye_color}</p>
      <p>{people.gender}</p>
      <p>{people.hair_color}</p>
      <p>{people.height}</p>
      <p>{people.mass}</p>
      <p>{people.skin_color}</p>
      <p>{people.vehicles}</p>
      <p>{people.homeworld}</p>
      <p>{people.films}</p>
    </div>
  );
}

export default PeopleDetails;

/**
 * name
 * birth_year
 * eye_color
 * gender
 * hair_color
 * height
 * mass
 * skin_color
 * vehicles
 * homeworld
 * films
 * url
 * created
 * edited

SEARCH
 * name

 */
