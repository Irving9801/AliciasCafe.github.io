import { Menu } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import React from "react";
import SubMenu from "antd/lib/menu/SubMenu";
import logo from "../../../assets/img/logo.png";
import {
  LogoutOutlined,
  MenuUnfoldOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";
import "./layout.css"
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/action/userActions";
function Sidenav({ color }) {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const page = pathname.replace("/", "");
  const logoutHandler = () => {
    dispatch(logout());
  };
  const signup = [
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      key={0}
    >
      <path
        d="M0,2A2,2,0,0,1,2,0H8a2,2,0,0,1,2,2V8a2,2,0,0,1-2,2H2A2,2,0,0,1,0,8Z"
        transform="translate(4 4)"
        fill={color}
      />
      <path
        d="M2,0A2,2,0,0,0,0,2V8a2,2,0,0,0,2,2V4A2,2,0,0,1,4,2h6A2,2,0,0,0,8,0Z"
        fill={color}
      />
    </svg>,
  ];
  const dashboard = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6V4Z"
        fill={color}
      ></path>
      <path
        d="M3 10C3 9.44771 3.44772 9 4 9H10C10.5523 9 11 9.44771 11 10V16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16V10Z"
        fill={color}
      ></path>
      <path
        d="M14 9C13.4477 9 13 9.44771 13 10V16C13 16.5523 13.4477 17 14 17H16C16.5523 17 17 16.5523 17 16V10C17 9.44771 16.5523 9 16 9H14Z"
        fill={color}
      ></path>
    </svg>,
  ];
  const tables = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M9 2C8.44772 2 8 2.44772 8 3C8 3.55228 8.44772 4 9 4H11C11.5523 4 12 3.55228 12 3C12 2.44772 11.5523 2 11 2H9Z"
        fill={color}
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 5C4 3.89543 4.89543 3 6 3C6 4.65685 7.34315 6 9 6H11C12.6569 6 14 4.65685 14 3C15.1046 3 16 3.89543 16 5V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V5ZM7 9C6.44772 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11H7.01C7.56228 11 8.01 10.5523 8.01 10C8.01 9.44772 7.56228 9 7.01 9H7ZM10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11H13C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9H10ZM7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44772 15 7 15H7.01C7.56228 15 8.01 14.5523 8.01 14C8.01 13.4477 7.56228 13 7.01 13H7ZM10 13C9.44772 13 9 13.4477 9 14C9 14.5523 9.44772 15 10 15H13C13.5523 15 14 14.5523 14 14C14 13.4477 13.5523 13 13 13H10Z"
        fill={color}
      ></path>
    </svg>,
  ];
  return (
    <>
      <div className="brand">
        <img
          src={logo}
          alt=""
          style={{ width: "4rem", height: "4rem", margin: "auto" }}
        />
        <span>Alicia's Dashboard</span>
      </div>
      <hr />
      <Menu theme="light" mode="inline">
        <SubMenu
          key="sub1"
          title={
            <>
              <span
                className="icon"
                style={{
                  background: page === "dashboard" ? color : "",
                }}
              >
                {dashboard}
              </span>
              <span className="label">Dashboard</span>
            </>
          }
        >
          <Menu.Item key="1">
            <NavLink to="/admin/dashboard">
              <span className="label">Menu</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/admin/recipes">
              <span className="label">Recetas</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink to="/admin/products">
              <span className="label">productos</span>
            </NavLink>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          title={
            <>
              <span
                className="icon"
                style={{
                  background: page === "tables" ? color : "",
                }}
              >
                {tables}
              </span>
              <span className="label">Listas</span>
            </>
          }
        >
          <Menu.Item key="2">
            <NavLink to="/admin/tables">
              <span className="label">Listas de recetas</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink to="/admin/listMenu">
              <span className="label">Lista de menu</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="4">
            <NavLink to="/admin/listProducts">
              <span className="label">Lista de productos</span>
            </NavLink>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          title={
            <>
              <span
                className="icon"
                style={{
                  background: page === "tables" ? color : "",
                }}
              >
                {tables}
              </span>
              <span className="label">Tienda</span>
            </>
          }
        >
          <Menu.Item key="2">
            <NavLink to="/admin/orderlist">
              <span className="label">Pedidos</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink to="/admin/user">
              <span className="label">Usuarios</span>
            </NavLink>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="8" onClick={logoutHandler}>
          <NavLink to="/">
            <span className="icon"><LogoutOutlined style={{ fontSize: "20px", color: "#fff" }} /></span>
            <span className="label">Cerrar sesión</span>
          </NavLink>
        </Menu.Item>
      </Menu>
    </>
  );
}

export default Sidenav;
