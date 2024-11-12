import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';


const PlanetDetail = () => {
  const {id} = useParams();
  const [planet, setPlanet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlanet = async () => {
      const data = await fetch (`https://swapi.dev/api/planets/${id}`)
      const response = await data.json();
      console.log(response)
      setPlanet(response);
      setLoading(false);
    }

    fetchPlanet()
  }, [id]);

  if (loading){
    return <div>Cargando... </div>
  }

  if (!planet ) {
    return <div>no se ha encontrado el Planeta</div>
  }


// climate, population, gravity, terrain

  return (
    <div>
      <h2>{planet.name}</h2>
      <p><strong>Clima:</strong>{planet.climate}</p>
      <p><strong>Poblacion:</strong>{planet.population}</p>
      <p><strong>Gravedad:</strong>{planet.gravity}</p>
      <p><strong>Terreno:</strong>{planet.terrain}</p>
    </div>
  )
}

export default PlanetDetail
