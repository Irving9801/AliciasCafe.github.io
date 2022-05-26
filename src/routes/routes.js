import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Recetas from "../pages/Recetas";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Connection;
