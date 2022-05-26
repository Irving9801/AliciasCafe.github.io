import { Layout } from "antd";
import React from "react";
import logo from "../assets/img/logo.png";
import "../../src/assets/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./index.css";
const { Content } = Layout;
export default function () {
  return (
    <nav id="navbar-header" className="navbar navbar-expand-lg">
      <Content className="container">
        <div
          className="collapse navbar-collapse justify-content-around"
          id="navbarSupportedContent"
        >
          <div className="divo">
            <Link to="/">Incio</Link>
            <Link to="/Menu">Menu</Link>
            <Link to="/about">**</Link>
            <Link to="/about">Sobre Nosotros</Link>
            <Link to="/recipes">Recetas</Link>
          </div>
          <a
            className="navbar-brand navbar-brand-center d-flex align-items-center only-desktop"
            href="/"
          >
            <img src={logo} alt="" width={50} />
          </a>
          <div className="divo">
            <Link to="/recetas">Recetas</Link>
            <Link to="/about">Acerca de</Link>
            <Link to="/about">**</Link>
            <Link to="/contactus">Contactanos</Link>
            <Link to="/Login">Sign Up / Registrate</Link>
          </div>
        </div>
      </Content>
    </nav>
  );
}
