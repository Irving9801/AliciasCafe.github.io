import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing";
import Rtl from "./pages/Rtl";
import Profile from "./pages/Profile";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";

function App() {
  return (
    <div className="App">
      <Main>
        <Home />
        {/* <Tables />
        <Billing />
        <Rtl />
        <Profile /> */}
      </Main>
    </div>
  );
}

export default App;
