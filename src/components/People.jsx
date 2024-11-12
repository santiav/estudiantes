import React from 'react'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(( ) => {
    const fetchPeople = async () => {
      const data = await fetch ('https://swapi.dev/api/people')
      const response = await data.json();
      setPeople(response.results);
    }

    fetchPeople();
  }, []);

  return (
    <div>
      <h2>People</h2>
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
