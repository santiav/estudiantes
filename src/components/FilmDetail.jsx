import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const FilmDetail = () => {
  const { id } = useParams();
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://swapi.dev/api/films/${id}`);
      const response = await data.json();

      setFilm(response);
      setLoading(false);
      console.log(response);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }



  return (
    <div>

      <h1>{film.title}</h1>
      <p><strong>Sinopsis: </strong>{film.opening_crawl}</p>
      <p><strong>Director: </strong>{film.director}</p>
      <p><strong>Productor: </strong>{film.producer}</p>

      {film.characters.map((character) => {
        const url = character.slice(21 )
        return (
      
        <li><Link to={url}>{url}</Link></li>
      )})}

      <p><strong>Fecha de lanzamiento: </strong>
      {new Date(film.release_date).toLocaleDateString('es-ES')}</p>
    </div>
  );
};

export default FilmDetail;
