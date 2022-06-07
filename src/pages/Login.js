import React, { useState } from "react";
import {  NavLink, Link } from "react-router-dom";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import "../assets/css/pages/login.css";
import { LeftOutlined } from '@ant-design/icons';
import { Layout } from "antd";

const { Content } = Layout;
const Login = () => {
  const [count, setCount] = useState(1);

  return (
    <Layout className="layout__Main">
   
      <Content id="login">
        <div className="App">
          <div className="appAside" />
          <div className="appForm">

          <Link to="/"><LeftOutlined /> Atras</Link>
          
            <div className="pageSwitcher">
              <NavLink
                to="/Login"
                // activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
                onClick={() => setCount(0)}
              >
                Sign In
              </NavLink>
              <NavLink
                exact
                to="/Login"
                // activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
                onClick={() => setCount(2)}
              >
                Sign Up
              </NavLink>
            </div>

            <div className="formTitle">
              <NavLink
                to="/Login"
                // activeClassName="formTitleLink-active"
                className="formTitleLink"
                onClick={() => setCount(0)}
              >
                Sign In
              </NavLink>
              or
              <NavLink
                exact
                to="/Login"
                // activeClassName="formTitleLink-active"
                className="formTitleLink"
                onClick={() => setCount(2)}
              >
                Sign Up
              </NavLink>
              {count === 0 ? <SignIn /> : <SignUp />}
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Login;
