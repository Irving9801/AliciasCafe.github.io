import React from "react";
import { Layout } from "antd";

import Footer from "../components/FooterComponent";
import Header from "../components/Header";
const { Content } = Layout;
function About() {
    return (
        <Layout className="layout__Main">
        <Header />
        <Content>asdasdasdasdad</Content>
        <Footer />
      </Layout>
    );
}
export default About