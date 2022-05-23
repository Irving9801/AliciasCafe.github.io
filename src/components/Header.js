import { Layout, Tabs } from "antd";
import React from "react";
import logo from "../assets/img/logo.svg";
import "../../src/assets/css/bootstrap.min.css";
import About from "../pages/About";
import { Router, Switch, Link, Route } from "react-router-dom";
const { TabPane } = Tabs;
const { Content } = Layout;
export default function () {
  return (
    <nav id="navbar-header" className="navbar navbar-expand-lg">
      <Content className="container">
        <div
          className="collapse navbar-collapse justify-content-around"
          id="navbarSupportedContent"
        >
          <Tabs>
            <Link to="/">Incio</Link>
            <Link to="/about">Acerca de</Link>
            <Link to="/about">Carga masiva</Link>
            {/* </TabPane>
            <TabPane tab="Recetas" key="3"></TabPane> */}
          </Tabs>
          <a
            className="navbar-brand navbar-brand-center d-flex align-items-center only-desktop"
            href="#"
          >
            <img src={logo} alt="" width={50} />
          </a>
          <Tabs>
            <TabPane tab="Menu" key="4" to="/"></TabPane>
            <TabPane tab="Equipo" key="5"></TabPane>
            <TabPane tab="Reservacion" key="6"></TabPane>
          </Tabs>
        </div>
      </Content>
    </nav>
  );
}
