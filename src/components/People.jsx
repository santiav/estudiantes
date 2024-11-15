import React from 'react'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const People = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true)
  const [term, setTerm] = useState("")

  useEffect(( ) => {
    const fetchPeople = async () => {
      const data = await fetch (`https://swapi.dev/api/people/?search=${term}`)
      const response = await data.json();
      setPeople(response.results);
      setLoading(false)
    }

    fetchPeople();
  }, [term]);

  if (loading) {
    return <div className="flex justify-center items-center text-white text-3xl h-screen"><strong>Cargando...</strong></div>;
  }

  return (
    <div>
      <h2>People</h2>
      <input
      type="text"
      placeholder='Buscar...'
      value={term}
      onChange={(e)=> setTerm(e.target.value)}
      />
      <ul>
        {people.map((person,index) => (
          <li key={index}>
              <Link to={`/people/${index + 1}`}>{person.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default People
