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
            <Link to="/recetas">Recetas</Link>
          </div>
          <a
            className="navbar-brand navbar-brand-center d-flex align-items-center only-desktop"
            href="/"
          >
            <img src={logo} alt="" width={130} />
          </a>
          <div className="divo">
            <Link to="/about">About</Link>
            <Link to="/Login">Sign Up / Sign In</Link>
          </div>
        </div>
      </Content>
    </nav>
  );
}
