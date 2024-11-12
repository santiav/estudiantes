import React from "react";
import { Outlet, NavLink } from "react-router-dom";
function Layout() {
  return (
    <div>
      <header>
        <h1>Star Wars Movies</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/films">Peliculas</NavLink>
            </li>
            <li>
              <NavLink to="/people">Personajes</NavLink>
            </li>
            <li>
              <NavLink to="/planets">Planetas</NavLink>
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
