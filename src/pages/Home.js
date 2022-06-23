import React from "react";
import "antd/dist/antd.min.css";
import { Layout } from "antd";
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
        <header id="header">
          <div class="intro">
            <div class="overlay">
              <div class="container">
                <div class="row">
                  <div class="intro-text">
                    <h1>Alicia's Cafe Gourmet</h1>
                    <p>Pedidos: 933-7450</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div id="features" class="text-center">
          <div class="container">
            <div class="section-title">
              <h2>Nuestros Especiales</h2>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-4">
                <div class="features-item">
                  <h3>Lorem ipsum dolor</h3>
                  <img src="https://media-cdn.tripadvisor.com/media/photo-p/14/54/1e/21/photo0jpg.jpg" class="img-responsive" alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis sed dapibus leo nec ornare diam sed commodo.
                  </p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-4">
                <div class="features-item">
                  <h3>Consectetur adipiscing</h3>
                  <img src="https://media-cdn.tripadvisor.com/media/photo-p/14/54/1e/21/photo0jpg.jpg" class="img-responsive" alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis sed dapibus leo nec ornare diam sed commodo.
                  </p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-4">
                <div class="features-item">
                  <h3>Duis sed dapibus</h3>
                  <img src="https://media-cdn.tripadvisor.com/media/photo-p/14/54/1e/21/photo0jpg.jpg" class="img-responsive" alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis sed dapibus leo nec ornare diam sed commodo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
}
