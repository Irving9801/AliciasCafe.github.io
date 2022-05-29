import React  from "react";
import "antd/dist/antd.min.css";
import { Carousel, Col, Layout, Row } from "antd";
import Footer from "../components/FooterComponent";
import Header from "../components/Header";
import "../assets/css/pages/style.css";
import Principalpage from "../components/Principalpage";
// import { useSplash } from "../components/SplashProvider";
const { Content } = Layout;

// const sleep = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Home() {
  // const { hideSplash, isShown } = useSplash();

  // useEffect(() => {
  //   (async () => {
  //     // Simulating some background work
  //     await sleep(1000);
  //     // As soon as the backgorund work finishes, hide the splash and display the home screen
  //     hideSplash();
  //   })();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  return (
    <Layout className="layout__Main">
      <Header />
      <Content>
        <Principalpage></Principalpage>
      </Content>
      <Footer />
    </Layout>
  );
}
