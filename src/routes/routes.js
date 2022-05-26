import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Recetas from "../pages/Recetas";
import Recipes from "../components/Recipes";
import ContacUs from "../components/ContacUs";
import Login from "../pages/Login";
function Connection() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Recetas" element={<Recetas />}/>
          <Route path="/Menu" element={<Menu />}/>
          <Route path="*" element={<h1>404</h1>}></Route>
          <Route path="/Recipes" element={<Recipes />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ContactUs" element={<ContacUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Connection;
