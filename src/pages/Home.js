import React from "react";
import { Layout } from "antd";
import Footer from "../components/FooterComponent";
import Header from "../components/Header";
import "../assets/css/pages/style.css";
import destacado1 from "../assets/destacado1.jpg";
import destacado2 from "../assets/destacados2.jpg";
import destacado3 from "../assets/destacado3.jpg";
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
                  <h3>Sister’s Sandwich</h3>
                  <img src={destacado1} className="img-responsive" alt="" />
                  <p>
                    El nuevo Sister’s Sandwich ha llegado a nuestro menú de
                    desayunos para quedarse. Que esperas para probarlo?.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4">
                <div className="features-item">
                  <h3>Cheesy House Burguer</h3>
                  <img src={destacado2} className="img-responsive" alt="" />
                  <p>
                    La nueva opción en hamburguesas que te traemos. Pan de la
                    Casa, Doble carne, Doble queso Cheddar y Salsa de la casa.
                    Simplemente deliciosa.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4">
                <div className="features-item">
                  <h3>Passion Burguer</h3>
                  <img src={destacado3} className="img-responsive" alt="" />
                  <p>
                    Pan de la casa, Carne cubierta con queso cheddar, lechuga,
                    tomate, bacon y nuestra nueva salsa a base de maracuyá.
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
