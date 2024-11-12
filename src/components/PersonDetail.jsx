import React from 'react'
import { useEffect, useState } from "react";


const PersonDetail = () => {
  const {id} = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const fetchPerson = async () => {
      const data = await fetch ('https://swapi.dev/api/people')
      const response = await data.json();
    }
  }

  return (
    <div>
      <h2>Nombre</h2>
      <p>Detalles</p>
    </div>
  )
}

export default PersonDetail


