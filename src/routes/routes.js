import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Recetas from "../pages/Recetas";
import Login from "../pages/Login";
import Homes from "../admin/pages/Home";
import Recipes from "../admin/pages/Recipes";
import Tables from "../admin/pages/Tables";
import ListMenu from "../admin/pages/TablesMenu";
import Index from "../admin/App";
import Ecommerce from "../pages/ecommerce";
import Procedure from "../pages/procedure";
import DetalisEcommerce from "../pages/DetalisEcommerce";
import DetalisRecipes from "../admin/components/details/detailsRecipes";
import DetailsMenu from "../admin/components/details/detailsMenu";
function Connection() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Recetas" element={<Recetas />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="*" element={<h1>404</h1>}></Route>
          <Route path="/Login" element={<Login />} />
          <Route path="/tienda" element={<Ecommerce />} />
          <Route path="/admin" element={<Index />} />
          <Route path="/procedure/:id" element={<Procedure />} />
          {/* <Main> */}
          <Route path="/admin/details/:id" element={<DetalisRecipes />} />
          <Route path="/admin/menu/:id" element={<DetailsMenu />} />
          <Route path="/admin/dashboard" element={<Homes />} />
          <Route path="/admin/recipes" element={<Recipes />} />
          <Route path="/admin/tables" element={<Tables />} />
          <Route path="/admin/listMenu" element={<ListMenu />} />
          <Route path="/details/:id" element={<DetalisEcommerce />} />
          {/* </Main> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Connection;
