import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./FilmDetails.css";

function FilmDetails() {
  const { id } = useParams(); // Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the route path.
  const [film, setFilm] = useState(null);

  useEffect(() => {
    // llamar a las paginas de manera independiente
    axios
      .get(`http https://swapi.dev/api/films/${id}`)
      // le asigno respuesta del API a setfilm();
      .then((response) => setFilm(response.data));
  }, [id]);

  if (!film) return <p>Cargando films...</p>;

  return (
    <div className="film-detail">
      <h2>{film.title}</h2>
      <img src={film.image} alt={film.tittle} />
      <p>{film.episode_id}</p>
      <p>{film.director}</p>
      <p>{film.producer}</p>
      <p>{film.release_date}</p>
      <p>{film.species}</p>
      <p>{film.starships}</p>
      <p>{film.vehicles}</p>
      <p>{film.characters}</p>
      <p>{film.planets}</p>

      <p>Precio: ${film.price}</p>
    </div>
  );
}

export default FilmDetails;

/**
 * title
 * episode_id
 * opening_crawl
 * director
 * producer
 * release_date
 * species
 * starships
 * vehicles
 * characters
 * planets
 * url
 * created
 * edited

SEARCH
 * title

 */
