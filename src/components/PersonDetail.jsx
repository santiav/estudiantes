import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PersonDetail = () => {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPerson = async () => {
      const data = await fetch(`https://swapi.dev/api/people/${id}`);
      const response = await data.json();
      console.log(response);
      setPerson(response);
      setLoading(false);
    };

    fetchPerson();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center text-white text-3xl h-screen">
        <strong>Cargando...</strong>
      </div>
    );
  }

  if (!person) {
    return <div>no se ha encontrado la persona</div>;
  }

  /* name, birth_year, gender, height, mass, hair_color, skin_color, eye_color */
  return (
    <div>
      <h2>{person.name}</h2>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <ul class="border border-gray-200 rounded overflow-hidden shadow-md">
        <li class="li-group">
          <strong>Fecha de nacimiento:</strong>
          {person.birth_year}
        </li>
        <li class="li-group">
          <strong>Altura:</strong>
          {person.height}
        </li>
        <li class="li-group">
          <strong>Peso:</strong>
          {person.mass}
        </li>
        <li class="li-group">
          <strong>Color de pelo:</strong>
          {person.hair_color}
        </li>

        <li class="li-group">
          <strong>Color de piel:</strong>
          {person.skin_color}
        </li>

        <li class="li-group">
          <strong>Color de ojo:</strong>
          {person.eye_color}
        </li>

        <li class="li-group">
          <strong>Genero:</strong>
          {person.gender}
        </li>
      </ul>
    </div>
  );
};

export default PersonDetail;
