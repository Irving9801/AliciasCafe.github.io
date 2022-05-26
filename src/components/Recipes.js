import React from "react";
import { Layout } from "antd";

import Footer from "../components/FooterComponent";
import Header from "../components/Header";
const { Content } = Layout;
function Recipes() {
    return (
        <Layout className="layout__Main">
        <Header />
        <Content>Recetas</Content>
        <Footer />
      </Layout>
    );
}
export default Recipes