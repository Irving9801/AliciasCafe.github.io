import React from "react";
import { Layout, Divider } from "antd";
import "./about.css";
import Footer from "../components/FooterComponent";
import Header from "../components/Header";
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
        </main>
      </Content>
      <Footer />
    </Layout>
  );
}
export default About;
