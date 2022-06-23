import React from "react";
import { Layout, Divider, Row, Col } from "antd";
import "./about.css";
import Footer from "../components/FooterComponent";
import Header from "../components/Header";
import GoogleMaps from "simple-react-google-maps";
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

                  <strong class="text-white">
                    this is how our kitchen evolved in new digital era
                  </strong>
                </div>
              </div>
            </div>

            <div class="overlay"></div>
          </header>

          <section class="about section-padding bg-white">
            <div class="container">
              <div class="row">
                <div class="col-lg-6 col-12 mb-2">
                  <h4 class="mb-3">
                    Crispy Kitchen is the latest Bootstrap 5 HTML template
                    provided by Tooplate website.
                  </h4>

                  <a href="news.html" class="custom-btn btn btn-dark mt-3">
                    Check out News
                  </a>

                  <a
                    href="contact.html"
                    class="custom-btn btn btn-danger mt-3 ms-3"
                  >
                    Say Hi
                  </a>
                </div>

                <div class="col-lg-6 col-12">
                  <p className="description_text">
                    Since this website template is 100% free to use, you can
                    edit and apply it for your commercial restaurant websites.
                    There are 6 HTML pages included in this template. Please{" "}
                    <strong>click "Reservation" button</strong> on the top right
                    to see the pop-up reservation form.
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
                      <h4 class="mt-3 mb-0">Sophia</h4>

                      <p>CEO &amp; Founder</p>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-12 my-lg-0 my-4">
                  <div class="team-thumb">
                    <img
                      src="https://t4.ftcdn.net/jpg/04/72/26/31/360_F_472263145_qIPkhZolVX1zIpF4e8SGvIJZ1ZsU4J7j.jpg"
                      class="img-fluid team-image"
                      alt=""
                    />

                    <h4 class="mt-3 mb-0">Benjamin W.</h4>

                    <p>Restaurant Manager</p>
                  </div>
                </div>

                <div class="col-lg-4 col-12">
                  <div class="team-thumb">
                    <img
                      src="https://t4.ftcdn.net/jpg/04/72/26/31/360_F_472263145_qIPkhZolVX1zIpF4e8SGvIJZ1ZsU4J7j.jpg"
                      class="img-fluid team-image"
                      alt=""
                    />

                    <h4 class="mt-3 mb-0">Muchen Jack</h4>

                    <p>Senior Chef</p>
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
                    9:00 - 02:00
                  </Col>
                  <Col span={8}>Martes</Col>
                  <Col span={8} offset={8}>
                    9:00 - 02:00
                  </Col>
                  <Col span={8}>Miercoles</Col>
                  <Col span={8} offset={8}>
                    9:00 - 02:00
                  </Col>
                  <Col span={8}>Jueves</Col>
                  <Col span={8} offset={8}>
                    9:00 - 02:00
                  </Col>
                  <Col span={8}>Viernes</Col>
                  <Col span={8} offset={8}>
                    9:00 - 02:00
                  </Col>
                  <Col span={8}>Sabado</Col>
                  <Col span={8} offset={8}>
                    9:00 - 02:00
                  </Col>
                  <Col span={8}>Domingo</Col>
                  <Col span={8} offset={8}>
                    Cerrado
                  </Col>
                </Row>
              </div>
            </div>
          </section>
          <section class="about section-padding">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <h2 class="mb-5">Ubicacion</h2>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1141.168724778488!2d-81.31669315715396!3d8.009971310739733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fae396b6a9a78d1%3A0x30d43c6eb3c73218!2sAlicia&#39;s%20Cafe%20Gourmet!5e0!3m2!1ses-419!2spa!4v1655356351713!5m2!1ses-419!2spa"
                  width="600"
                  height="450"
                  frameborder="0"
                  style={{ border: 0 }}
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
