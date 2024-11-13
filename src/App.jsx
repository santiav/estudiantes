import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://swapi.dev/api/films");
      const response = await data.json();
      setFilms(response.results);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center text-white text-3xl h-screen"><strong>Cargando...</strong></div>;
  }

  return (
    <div>
      <h1 className="text-5xl text-center m-5 text-white">Star Wars Movies</h1>
      <ul className="flex flex-wrap gap-[10px] justify-center">
        {films.map((film) => {
          const url = film.url.slice(-2, -1);

          return (
            <Link to={`/films/${url}`} className="p-3 text-center backdrop-blur-sm bg-white/75 w-[31.33%] hover:bg-slate-600/75 hover:text-white rounded-md">
              <li
                key={film.episode_id}
                
              >
                <strong className="text-2xl">{film.title}</strong>
                <br />
                <small className="text-white text-xl">{film.release_date}</small>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
