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
        <div className="main-home">
          <div className="container">
            <div class="row d-flex align-items-center">
              <div className="col-lg-6 hero-left">
                <h1 className="display-4 mb-5">We Love Delicious Foods!</h1>
                <div className="mb-2">
                  <a
                    className="btn btn-primary btn-shadow btn-lg"
                    href="#"
                    role="button"
                  >
                    Explore Menu
                  </a>
                  <a
                    className="btn btn-icon btn-lg"
                    href="https://player.vimeo.com/video/33110953"
                    data-featherlight="iframe"
                    data-featherlight-iframe-allowfullscreen="true"
                  >
                    <span className="lnr lnr-film-play"></span>
                    Play Video
                  </a>
                </div>

                <ul className="hero-info list-unstyled d-flex text-center mb-0">
                  <li className="border-right">
                    <span className="lnr lnr-rocket"></span>
                    <h5>Fast Delivery</h5>
                  </li>
                  <li className="border-right">
                    <span className="lnr lnr-leaf"></span>
                    <h5>Fresh Food</h5>
                  </li>
                  <li className="">
                    <span className="lnr lnr-bubble"></span>
                    <h5>24/7 Support</h5>
                  </li>
                </ul>
              </div>
              <div class="col-lg-6 hero-right">
                <div class="owl-carousel owl-theme hero-carousel">
                  <div class="item">
                    <img class="img-fluid" src="img/hero-1.jpg" alt="" />
                  </div>
                  <div class="item">
                    <img class="img-fluid" src="img/hero-2.jpg" alt="" />
                  </div>
                  <div class="item">
                    <img class="img-fluid" src="img/hero-3.jpg" alt="" />
                  </div>
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
