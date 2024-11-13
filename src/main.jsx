import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import './App.css'
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { Layout, FilmDetail, NotFound, People, PersonDetail, Planets, PlanetsDetail } from "./components/components.js"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: "films", element: <Navigate to="/" /> },
      { path: "films/:id", element: <FilmDetail /> },
      { path: "people", element: <People /> },
      { path: "people/:id", element: <PersonDetail /> },
      { path: "planets", element: <Planets /> },
      { path: "planets/:id", element: <PlanetsDetail /> },
      { path: "*", element: <NotFound /> },
    
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

 