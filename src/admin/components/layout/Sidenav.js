import { Menu } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import React from "react";
import SubMenu from "antd/lib/menu/SubMenu";
import { MenuUnfoldOutlined, OrderedListOutlined } from "@ant-design/icons";
function Sidenav({ color }) {
  const { pathname } = useLocation();

  return (
    <>
      <div className="brand">
        <img src=" " alt="" />
        <span>Alicia's Dashboard</span>
      </div>
      <hr />
      <Menu theme="light" mode="inline">
        <SubMenu
          key="sub1"
          title={
            <>
              <OrderedListOutlined style={{ fontSize: "16px" }} />
              <span className="label">Dashboard</span>
            </>
          }
        >
          <Menu.Item key="1">
            <NavLink to="/admin/dashboard">
              <MenuUnfoldOutlined style={{ fontSize: "16px" }} />
              <span className="label">Menu</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/admin/recipes">
              <MenuUnfoldOutlined style={{ fontSize: "16px" }} />
              <span className="label">Recetas</span>
            </NavLink>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          title={
            <>
              <OrderedListOutlined style={{ fontSize: "16px" }} />
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
        </SubMenu>
      </Menu>
    </>
  );
}

export default Sidenav;
