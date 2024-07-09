import React from "react";
import Admin from "../pages/Admin";
import Menu from "../pages/Menu";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import EditProduct from "../pages/EditProduct/inddex";

export default function MainRoutes() {
  const ROUTES = [
    { link: "/admin", element: <Admin />, id: 1 },
    { link: "/menu", element: <Menu />, id: 2 },
    { link: "/", element: <Home />, id: 3 },
    { link: "/edit/:id", element: <EditProduct />, id: 4 },
  ];
  return (
    <Routes> 
      {ROUTES.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
}
