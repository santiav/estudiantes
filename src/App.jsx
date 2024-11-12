import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://swapi.dev/api/films");
      const response = await data.json();
      setFilms(response.results);
      setLoading(false)
    };
    fetchData();
  }, []);


  if (loading) {
    return <div>Cargando... </div>;
  }


  return (
    <div>
      <ul>
        {films.map((film) => {
          const url = film.url.slice(-2, -1);

          return (
            <li key={film.episode_id}>
              <Link to={`/films/${url}`}>{film.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
