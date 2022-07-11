import React from "react";
import { Layout, Row, Col } from "antd";
import "./about.css";
import Footer from "../components/FooterComponent";
import Header from "../components/Header";
import about1 from "./images/about1.jpg";
import about2 from "./images/about2.jpg";
import about3 from "./images/about3.jpg";
import about4 from "./images/about4.jpg";
const { Content } = Layout;
function About() {
  return (
    <Layout className="layout__Main">
      <Header />
      <Content>
        <main>
          <header class="site-header site-about-header">
            <div class="container">
              <div class="row">
                <div class="col-lg-10 col-12 mx-auto">
                  <h1 class="text-white">Alicia's Cafe Gourmet</h1>
                </div>
              </div>
            </div>

            <div class="overlay"></div>
          </header>
          <div class="container-xxl py-5">
            <div class="container">
              <div class="row g-5 align-items-center">
                <div class="col-lg-6">
                  <div class="row g-3">
                    <div class="col-6 text-start">
                      <img
                        class="img-fluid rounded w-100 wow zoomIn"
                        data-wow-delay="0.1s"
                        src={about1}
                      />
                    </div>
                    <div class="col-6 text-start">
                      <img
                        class="img-fluid rounded w-75 wow zoomIn"
                        data-wow-delay="0.3s"
                        src={about2}
                        style={{ marginTop: "25%;" }}
                      />
                    </div>
                    <div class="col-6 text-end">
                      <img
                        class="img-fluid rounded w-75 wow zoomIn"
                        data-wow-delay="0.5s"
                        src={about3}
                      />
                    </div>
                    <div class="col-6 text-end">
                      <img
                        class="img-fluid rounded w-100 wow zoomIn"
                        data-wow-delay="0.7s"
                        src={about4}
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <h1 class="mb-4">
                    Bienvenido a{" "}
                    <i class="fa fa-utensils text-primary me-2"></i>
                    Alicia's Cafe Gourmet
                  </h1>
                  <p class="mb-4">
                    Nuestra misión es aumentar la cultura y consumo del café panameño
                    que es exportado a diferentes países y no solo darlo a
                    conocer internacionalmente, sino, que nacionalmente sea
                    degustado por cada uno de nosotros no solo en sitios
                    específicos del país como Boquete o Panamá, e ir cerrando
                    las limitaciones de algunos consumidores de no poder acceder
                    a sitios como estos.
                  </p>
                  <div class="row g-4 mb-4">
                    <div class="col-sm-6">
                      <div class="d-flex align-items-center border-start border-5 border-primary px-3">
                        <h1
                          class="flex-shrink-0 display-5 text-primary mb-0"
                          data-toggle="counter-up"
                        >
                          3
                        </h1>
                        <div class="ps-4">
                          <p class="mb-0">Años</p>
                          <h6 class="text-uppercase mb-0">de experiencia</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section class="about section-padding bg-white">
            <div class="container">
              <div class="row">
                <div class="col-lg-6 col-12 mb-2">
                  <h4 class="mb-3">Un poco de nuestra historia</h4>
                </div>

                <div class="col-lg-6 col-12">
                  <p className="description_text">
                    Alicia’s Café Gourmet es una empresa totalmente familiar que
                    aporta sus habilidades y conocimientos adquiridos a través
                    del tiempo con estudios realizados para especializarse en
                    esta área de los alimentos y ofrecer el mejor servicio
                    posible a sus clientes, además de que cuenta con un ambiente
                    agradable del cual se puede disfrutar de sus deliciosos
                    platillos, postres y cafés manteniendo la calidad de sus
                    creaciones trabajando con productos y personal de primera.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section class="about section-padding">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <h2 class="mb-5">Equipo</h2>
                </div>

                <div class="col-lg-4 col-12">
                  <div class="team-thumb">
                    <img
                      src="https://t4.ftcdn.net/jpg/04/72/26/31/360_F_472263145_qIPkhZolVX1zIpF4e8SGvIJZ1ZsU4J7j.jpg"
                      class="img-fluid team-image"
                      alt=""
                    />

                    <div class="team-info">
                      <h4 class="mt-3 mb-0">Vander Adrian Morón</h4>

                      <p>CEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="about section-padding">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <h2 class="mb-5">Horarios</h2>
                </div>
                <Row>
                  <Col span={8}>Lunes</Col>
                  <Col span={8} offset={8}>
                    CERRADO
                  </Col>
                  <Col span={8}>Martes</Col>
                  <Col span={8} offset={8}>
                    07:30 - 22:00
                  </Col>
                  <Col span={8}>Miercoles</Col>
                  <Col span={8} offset={8}>
                    07:30 - 22:00
                  </Col>
                  <Col span={8}>Jueves</Col>
                  <Col span={8} offset={8}>
                    07:30 - 22:00
                  </Col>
                  <Col span={8}>Viernes</Col>
                  <Col span={8} offset={8}>
                    07:30 - 22:00
                  </Col>
                  <Col span={8}>Sábado</Col>
                  <Col span={8} offset={8}>
                    16:00 - 22:00
                  </Col>
                  <Col span={8}>Domingo</Col>
                  <Col span={8} offset={8}>
                    16:00 - 22:00
                  </Col>
                </Row>
              </div>
            </div>
          </section>
          <section class="about section-padding">
            <div class="container">
              <div class="row">
                <div class="col-24">
                  <h2 class="mb-5">Ubicación</h2>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1141.168724778488!2d-81.31669315715396!3d8.009971310739733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fae396b6a9a78d1%3A0x30d43c6eb3c73218!2sAlicia&#39;s%20Cafe%20Gourmet!5e0!3m2!1ses-419!2spa!4v1655356351713!5m2!1ses-419!2spa"
                  width="100%"
                  height="450"
                  frameborder="0"
                  style={{ border: 0, width: "100%" }}
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
            </div>
          </section>
        </main>
      </Content>
      <Footer />
    </Layout>
  );
}
export default About;
