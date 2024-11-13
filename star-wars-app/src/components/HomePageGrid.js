import React, { useState, useEffect } from "react";
import PeopleCard from "./People/PeopleCard";
import PlanetCard from "./Planets/PlanetCard";
import FilmCard from "./Films/FilmCard";
import SpecieCard from "./Species/SpecieCard";
import StarshipCard from "./Starships/StarshipCard";
import "./HomePageGrid.css";
import axios from "axios";

function HomePageGrid({ searchQuery }) {
  const [elems, setElem] = useState([]);
  const [filteredElem, setFilteredElem] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const elemPerPage = 12;

  useEffect(() => {
    axios.get(`http https://swapi.dev/api/`).then((response) => {
      setElem(response.data);
      setFilteredElem(response.data);
    });
  });

  useEffect(() => {
    const filtered = elems.filter((elem) =>
      elem.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredElem(filtered);
    setCurrentPage(1);
  }, [elems, searchQuery]);

  const currentElems = filteredElem.slice(
    (currentPage - 1) * elemPerPage,
    currentPage * elemPerPage
  );
  console.log("data", elems);

  return (
    <div className="container">
      <h1>Nuestros Productos</h1>
      <div className="product-grid">
        {currentElems.map((elem) => (
          <>
            <PeopleCard key={elem.id} people={elem} />
            <PlanetCard key={elem.id} planet={elem} />
            <FilmCard key={elem.id} film={elem} />
            <SpecieCard key={elem.id} specie={elem} />
            <StarshipCard key={elem.id} starship={elem} />
          </>
        ))}
      </div>
    </div>
  );
}

export default HomePageGrid;
