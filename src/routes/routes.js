import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import SignIn from "../components/SignIn";
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
        <Route path="/Recipes" element={<Recipes/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/ContactUs" element={<ContacUs/>}></Route>
        <Route path="/SignIn" element={<SignIn/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default Connection;
