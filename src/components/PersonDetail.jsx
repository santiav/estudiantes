import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';


const PersonDetail = () => {
  const {id} = useParams();
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPerson = async () => {
      const data = await fetch (`https://swapi.dev/api/people/${id}`)
      const response = await data.json();
      console.log(response)
      setPerson(response);
      setLoading(false);
    }

    fetchPerson()
  }, [id]);

  if (loading){
    return <div>Cargando... </div>
  }

  if (!person ) {
    return <div>no se ha encontrado la persona</div>
  }

  /* name, birth_year, gender, height, mass, hair_color, skin_color, eye_color */
  return (
    <div>
      <h2>{person.name}</h2>
      <p><strong>Fecha de nacimiento:</strong>{person.birth_year}</p>
      <p><strong>Altura:</strong>{person.height}</p>
      <p><strong>Peso:</strong>{person.mass}</p>
      <p><strong>Color de pelo:</strong>{person.hair_color}</p>
      <p><strong>Color de piel:</strong>{person.skin_color}</p>
      <p><strong>Color de ojo:</strong>{person.eye_color}</p>
      <p><strong>Genero:</strong>{person.gender}</p>
    </div>
  )
}

export default PersonDetail


