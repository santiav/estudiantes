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

      switch (id) {
        case "1":
          // New Hope
          response.portada = "https://i.ytimg.com/vi/m1dXRe0Z1hw/hq720.jpg";
          break;
        case "2":
          // Empire back
          response.portada =
            "https://riotheatre.ca/wp-content/uploads/2020/06/empire-banner-1-1024x576.jpg";
          break;
        case "3":
          // return jedi
          response.portada =
            "https://ntvb.tmsimg.com/assets/p8890_v_h10_ab.jpg?w=1280&h=720";
          break;
        case "4":
          // phantom manace
          response.portada =
            "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/385C45162034D0D843A1DFE151986AA2C568643FD14A7B1FCE881F5393B24A56/scale?width=1200&aspectRatio=1.78&format=webp";
          break;
        case "5":
          // clones
          response.portada =
            "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/01/Star-Wars-Attack-of-the-Clones-Header.jpg";
          break;
          case "6":
          // clones
          response.portada =
            "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B38E9B3419A8AF5BA743C323CF835E7864A0406C310697CC34A072DE7E940FAD/scale?width=1200&aspectRatio=1.78&format=webp";
          break;
          default:
            response.portada = "https://picsum.photos/1000/700"
      }

      setFilm(response);
      setLoading(false);
      console.log(response);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center text-white text-3xl h-screen"><strong>Cargando...</strong></div>;
  }

  return (
    <div>
      <h1 className="text-white text-center text-5xl my-5 font-bold">
        {film.title}
      </h1>
      <div className="bg-white m-5 p-10 flex">
        {/* col */}
        <div className="w-1/2 flex flex-col pr-5">
          <h2 className="text-xl font-bold pb-2">Sinopsis:</h2>
          <p className="flex-grow">{film.opening_crawl}</p>

          <div>
            <strong>{film.director} - </strong>
            <strong>
              {" "}
              {new Date(film.release_date).toLocaleDateString("es-ES")}
            </strong>
          </div>
        </div>

        {/* col */}
        <div className="w-1/2">
          <img src={film.portada} className=" mx-auto block" />
        </div>
      </div>

      {/* 
      {film.characters.map((character) => {
        const url = character.slice(21);
        return (
          <li>
            <Link to={url}>{url}</Link>
          </li>
        );
      })} */}
    </div>
  );
};

export default FilmDetail;
