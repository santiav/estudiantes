import React from "react";
import { Outlet, NavLink } from "react-router-dom";
function Layout() {
  return (
    <div  className="bg-[url('https://wallpapers.com/images/featured/star-wars-plzcoaffexgf4h81.jpg')] h-screen">
      <header>
      <nav>
          <ul className="bg-slate-600 p-5 flex gap-2">
            <li>
              <NavLink to="/" className="text-white">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/films" className="text-white">
                Peliculas
              </NavLink>
            </li>
            <li>
              <NavLink to="/people" className="text-white">
                Personajes
              </NavLink>
            </li>
            <li>
              <NavLink to="/planets" className="text-white">
                Planetas
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Copyright</p>
      </footer>
    </div>
  );
}

export default Layout;
