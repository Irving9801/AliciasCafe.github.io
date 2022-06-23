import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Recetas from "../pages/Recetas";
import Login from "../pages/Login";
import Profile from "../admin/pages/Profile";
import Homes from "../admin/pages/Home";
import Tables from "../admin/pages/Tables";
import Billing from "../admin/pages/Billing"
import Index from "../admin/app";
import Ecommerce from "../pages/ecommerce";
import Procedure from "../pages/procedure";
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
          <Route path="/Admin" element={<Index />} />
          <Route path="/procedure/:id" element={<Procedure />} />
          {/* <Main> */}
          <Route path="/dashboard" element={<Homes />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/profile" element={<Profile />} />
          {/* </Main> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Connection;
