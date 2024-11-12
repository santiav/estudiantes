
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlanets = async () => {
      const data = await fetch("https://swapi.dev/api/planets");
      const response = await data.json();
      setPlanets(response.results);
      setLoading(false);
    };

    fetchPlanets();
  }, []);

  if (loading) {
    return <div>Cargando Planetas... </div>;
  }

  return (
    <div>
      <h2>Planetas</h2>
      <ul>
        {planets.map((planet, index) => (
          <li key={index}>
            <Link to={`/planets/${index + 1}`}>{planet.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Planets;
