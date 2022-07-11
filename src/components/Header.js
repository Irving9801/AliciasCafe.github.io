/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./Header.css";
import "./index.css";
import "../../src/assets/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { CSSTransition } from "react-transition-group";
import { Layout,Button } from "antd";
import { LogoutOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/action/userActions";
const { Content } = Layout;
export default function Header() {
  const dispatch = useDispatch();
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const userLogin = useSelector((state) => state.login);
  const logoutHandler = () => {
    dispatch(logout());
  };
  const { userInfo } = userLogin;
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <>
      <header className="Header">
        <button onClick={toggleNav} className="Logo" src={logo}>
          {/* <img src={logo} className="Logo" alt="logo" /> */}
        </button>

        {/* <button onClick={toggleNav} className="Logo">
          🍔
        </button> */}
        <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
        >
          <nav className="Nav">
            <Link to="/">Inicio</Link>
            <Link to="/Menu">Menu</Link>
            <Link to="/recetas">Recetas</Link>
            <Link to="/about">Acerca de</Link>
            <Link to="/tienda">Tienda</Link>
            <Link to="/Login">Sign Up / Registrate</Link>
          </nav>
        </CSSTransition>
        <button onClick={toggleNav} className="Burger">
          🛍️
        </button>
      </header>
      <nav id="navbar-header" className="navbar navbar-expand-lg">
        <Content className="container">
          <div
            className="collapse navbar-collapse justify-content-around"
            id="navbarSupportedContent"
          >
            <div className="divo">
              <Link to="/">Inicio</Link>
              <Link to="/Menu">Menu</Link>
              <Link to="/recetas">Recetas</Link>
            </div>
            <a
              className="navbar-brand navbar-brand-center d-flex align-items-center only-desktop"
              href="/"
            >
              <img src={logo} alt="" width={50} height={50} />
            </a>
            <div className="divo">
              <Link to="/about">Acerca de</Link>
              <Link to="/tienda">Tienda</Link>
              <Link to="/Login">Sign Up / Registrate</Link>
            </div>
          </div>
          <div className="icons-outled">
            {userInfo ? (
              <>
                 <Button type="link">
                  <ShoppingCartOutlined
                    style={{ fontSize: "26px", color: "#fff" }}
                  />
                </Button>
                <Button onClick={logoutHandler} type="link">
                  <LogoutOutlined style={{ fontSize: "26px", color: "#fff" }} />
                </Button>
              </>
            ) : null}
          </div>
        </Content>
      </nav>
    </>
  );
}
