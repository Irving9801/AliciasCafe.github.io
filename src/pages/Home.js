import React, { useEffect } from "react";
import "antd/dist/antd.min.css";
import { Carousel, Col, Layout, Row } from "antd";

import Footer from "../components/FooterComponent";
import Header from "../components/Header";
import "../assets/css/pages/style.css";
import { useSplash } from "../components/SplashProvider";
const { Content } = Layout;

const sleep = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
export default function Home() {
  const { hideSplash, isShown } = useSplash();

  useEffect(() => {
    (async () => {
      // Simulating some background work
      await sleep(1000);
      // As soon as the backgorund work finishes, hide the splash and display the home screen
      hideSplash();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout className="layout__Main">
      <Header />
      <Content>
        <Row gutter={[8, 8]} style={{ width: "80%", margin: "auto" }}>
          <Col span={12}>
            Welcome to Resto On her way she met a copy. The copy warned the
            Little Blind Text, that where it came from it would have been
            rewritten a thousand times and everything that was left from its
            origin would be the word "and" and the Little Blind Text should turn
            around and return to its own, safe country. A small river named
            Duden flows by their place and supplies it with the necessary
            regelialia. It is a paradisematic country, in which roasted parts of
            sentences fly into your mouth.
          </Col>
          <Col span={12}>
            <Carousel autoplay>
              <div>
                <h3 style={contentStyle}>1</h3>
              </div>
              <div>
                <h3 style={contentStyle}>2</h3>
              </div>
              <div>
                <h3 style={contentStyle}>3</h3>
              </div>
              <div>
                <h3 style={contentStyle}>4</h3>
              </div>
            </Carousel>
          </Col>
        </Row>
      </Content>
      <Footer />
    </Layout>
  );
}
