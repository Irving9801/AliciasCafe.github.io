import React, { useState } from "react";
import "./style.min.css";
import "./vendor/bootstrap/bootstrap.min.css";
import "./vendor/select2/select2.min.css";
import "./vendor/owlcarousel/owl.carousel.min.css";
import Header from "../components/Header";

export default function Home() {
  // Declara una nueva variable de estado, la cual llamaremos “count”
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="side-nav" className="sidenav">
        {/* <a href="javascript:void(0)" id="side-nav-close">
          &times;
        </a> */}

        <div className="sidenav-content">
          <p>Kuncen WB1, Wirobrajan 10010, DIY</p>
          <p>
            <span className="fs-16 primary-color">(+68) 120034509</span>
          </p>
          <p>info@yourdomain.com</p>
        </div>
      </div>{" "}
      <div id="side-search" className="sidenav">
        {/* <a href="javascript:void(0)" id="side-search-close">
          &times;
        </a> */}
        <div className="sidenav-content">
          <form action="">
            <div className="input-group md-form form-sm form-2 pl-0">
              <input
                className="form-control my-0 py-1 red-border"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button
                  className="input-group-text red lighten-3"
                  id="basic-text1"
                >
                  <i className="fas fa-search text-grey" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>{" "}
      <div id="canvas-overlay"></div>
      <div className="boxed-page">
        <nav id="navbar-header" className="navbar navbar-expand-lg">
          <div className="container">
            <a
              className="navbar-brand navbar-brand-center d-flex align-items-center p-0 only-mobile"
              href="/"
            >
              <img src="img/logo.png" alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="lnr lnr-menu"></span>
            </button>

           <Header/>
          </div>
        </nav>{" "}
        <div className="hero">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-6 hero-left">
                <h1 className="display-4 mb-5">
                  We Love <br />
                  Delicious Foods!
                </h1>
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
              <div className="col-lg-6 hero-right">
                <div className="owl-carousel owl-theme hero-carousel">
                  <div className="item">
                    <img className="img-fluid" src="img/hero-1.jpg" alt="" />
                  </div>
                  <div className="item">
                    <img className="img-fluid" src="img/hero-2.jpg" alt="" />
                  </div>
                  <div className="item">
                    <img className="img-fluid" src="img/hero-3.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="gtco-welcome" className="bg-white section-padding">
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div
                  className="col-sm-5 img-bg d-flex shadow align-items-center justify-content-center justify-content-md-end img-2"
                  //   style="background-image: url(img/hero-2.jpg);"
                ></div>
                <div className="col-sm-7 py-5 pl-md-0 pl-4">
                  <div className="heading-section pl-lg-5 ml-md-5">
                    <span className="subheading">About</span>
                    <h2>Welcome to Resto</h2>
                  </div>
                  <div className="pl-lg-5 ml-md-5">
                    <p>
                      On her way she met a copy. The copy warned the Little
                      Blind Text, that where it came from it would have been
                      rewritten a thousand times and everything that was left
                      from its origin would be the word "and" and the Little
                      Blind Text should turn around and return to its own, safe
                      country. A small river named Duden flows by their place
                      and supplies it with the necessary regelialia. It is a
                      paradisematic country, in which roasted parts of sentences
                      fly into your mouth.
                    </p>
                    <h3 className="mt-5">Special Recipe</h3>
                    <div className="row">
                      <div className="col-4">
                        <a href="#" className="thumb-menu">
                          <img
                            className="img-fluid img-cover"
                            src="img/hero-1.jpg"
                          />
                          <h6>Australian Organic Beef</h6>
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="#" className="thumb-menu">
                          <img
                            className="img-fluid img-cover"
                            src="img/hero-1.jpg"
                          />
                          <h6>Australian Organic Beef</h6>
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="#" className="thumb-menu">
                          <img
                            className="img-fluid img-cover"
                            src="img/hero-1.jpg"
                          />
                          <h6>Australian Organic Beef</h6>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="gtco-special-dishes" className="bg-grey section-padding">
          <div className="container">
            <div className="section-content">
              <div className="heading-section text-center">
                <span className="subheading">Specialties</span>
                <h2>Special Dishes</h2>
              </div>
              <div className="row mt-5">
                <div className="col-lg-5 col-md-6 align-self-center py-5">
                  <h2 className="special-number">01.</h2>
                  <div className="dishes-text">
                    <h3>
                      <span>Beef</span> Steak Sauce
                    </h3>
                    <p className="pt-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Cupiditate, ea vero alias perferendis quas animi doloribus
                      voluptates. Atque explicabo ea nesciunt provident libero
                      qui eum, corporis esse quos excepturi soluta?
                    </p>
                    <h3 className="special-dishes-price">$15.00</h3>
                    <a href="#" className="btn-primary mt-3">
                      book a table
                    </a>
                  </div>
                </div>
                <div className="col-lg-5 offset-lg-2 col-md-6 align-self-center mt-4 mt-md-0">
                  <img
                    src="img/steak.jpg"
                    alt=""
                    className="img-fluid shadow w-100"
                  />
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-lg-5 col-md-6 align-self-center order-2 order-md-1 mt-4 mt-md-0">
                  <img
                    src="img/salmon-zucchini.jpg"
                    alt=""
                    className="img-fluid shadow w-100"
                  />
                </div>
                <div className="col-lg-5 offset-lg-2 col-md-6 align-self-center order-1 order-md-2 py-5">
                  <h2 className="special-number">02.</h2>
                  <div className="dishes-text">
                    <h3>
                      <span>Salmon</span>
                      <br /> Zucchini
                    </h3>
                    <p className="pt-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Blanditiis, accusamus culpa quam amet ipsam odit ea
                      doloremque accusantium quo, itaque possimus eius. In a
                      quis quibusdam omnis atque vero dolores!
                    </p>
                    <h3 className="special-dishes-price">$12.00</h3>
                    <a href="#" className="btn-primary mt-3">
                      book a table{" "}
                      <span>
                        <i className="fa fa-long-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="gtco-menu" className="section-padding">
          <div className="container">
            <div className="section-content">
              <div className="row mb-5">
                <div className="col-md-12">
                  <div className="heading-section text-center">
                    <span className="subheading">Specialties</span>
                    <h2>Our Menu</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 menu-wrap">
                  <div className="heading-menu">
                    <h3 className="text-center mb-5">Breakfast</h3>
                  </div>
                  <div className="menus d-flex align-items-center">
                    <div className="menu-img rounded-circle">
                      <img
                        className="img-fluid"
                        src="img/breakfast-1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="text-wrap">
                      <div className="row align-items-start">
                        <div className="col-8">
                          <h4>Egg Sandwich</h4>
                        </div>
                        <div className="col-4">
                          <h4 className="text-muted menu-price">$30</h4>
                        </div>
                      </div>
                      <p>Meat Ball, Mie</p>
                    </div>
                  </div>
                  <div className="menus d-flex align-items-center">
                    <div className="menu-img rounded-circle">
                      <img
                        className="img-fluid"
                        src="img/breakfast-1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="text-wrap">
                      <div className="row align-items-start">
                        <div className="col-8">
                          <h4>Egg Sandwich</h4>
                        </div>
                        <div className="col-4">
                          <h4 className="text-muted menu-price">$30</h4>
                        </div>
                      </div>
                      <p>Meat Ball, Mie</p>
                    </div>
                  </div>
                  <div className="menus d-flex align-items-center">
                    <div className="menu-img rounded-circle">
                      <img
                        className="img-fluid"
                        src="img/breakfast-1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="text-wrap">
                      <div className="row align-items-start">
                        <div className="col-8">
                          <h4>Egg Sandwich</h4>
                        </div>
                        <div className="col-4">
                          <h4 className="text-muted menu-price">$30</h4>
                        </div>
                      </div>
                      <p>Meat Ball, Mie</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 menu-wrap">
                  <div className="heading-menu">
                    <h3 className="text-center mb-5">Breakfast</h3>
                  </div>
                  <div className="menus d-flex align-items-center">
                    <div className="menu-img rounded-circle">
                      <img
                        className="img-fluid"
                        src="img/breakfast-1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="text-wrap">
                      <div className="row align-items-start">
                        <div className="col-8">
                          <h4>Egg Sandwich</h4>
                        </div>
                        <div className="col-4">
                          <h4 className="text-muted menu-price">$30</h4>
                        </div>
                      </div>
                      <p>Meat Ball, Mie</p>
                    </div>
                  </div>
                  <div className="menus d-flex align-items-center">
                    <div className="menu-img rounded-circle">
                      <img
                        className="img-fluid"
                        src="img/breakfast-1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="text-wrap">
                      <div className="row align-items-start">
                        <div className="col-8">
                          <h4>Egg Sandwich</h4>
                        </div>
                        <div className="col-4">
                          <h4 className="text-muted menu-price">$30</h4>
                        </div>
                      </div>
                      <p>Meat Ball, Mie</p>
                    </div>
                  </div>
                  <div className="menus d-flex align-items-center">
                    <div className="menu-img rounded-circle">
                      <img
                        className="img-fluid"
                        src="img/breakfast-1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="text-wrap">
                      <div className="row align-items-start">
                        <div className="col-8">
                          <h4>Egg Sandwich</h4>
                        </div>
                        <div className="col-4">
                          <h4 className="text-muted menu-price">$30</h4>
                        </div>
                      </div>
                      <p>Meat Ball, Mie</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 menu-wrap">
                  <div className="heading-menu">
                    <h3 className="text-center mb-5">Breakfast</h3>
                  </div>
                  <div className="menus d-flex align-items-center">
                    <div className="menu-img rounded-circle">
                      <img
                        className="img-fluid"
                        src="img/breakfast-1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="text-wrap">
                      <div className="row align-items-start">
                        <div className="col-8">
                          <h4>Egg Sandwich</h4>
                        </div>
                        <div className="col-4">
                          <h4 className="text-muted menu-price">$30</h4>
                        </div>
                      </div>
                      <p>Meat Ball, Mie</p>
                    </div>
                  </div>
                  <div className="menus d-flex align-items-center">
                    <div className="menu-img rounded-circle">
                      <img
                        className="img-fluid"
                        src="img/breakfast-1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="text-wrap">
                      <div className="row align-items-start">
                        <div className="col-8">
                          <h4>Egg Sandwich</h4>
                        </div>
                        <div className="col-4">
                          <h4 className="text-muted menu-price">$30</h4>
                        </div>
                      </div>
                      <p>Meat Ball, Mie</p>
                    </div>
                  </div>
                  <div className="menus d-flex align-items-center">
                    <div className="menu-img rounded-circle">
                      <img
                        className="img-fluid"
                        src="img/breakfast-1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="text-wrap">
                      <div className="row align-items-start">
                        <div className="col-8">
                          <h4>Egg Sandwich</h4>
                        </div>
                        <div className="col-4">
                          <h4 className="text-muted menu-price">$30</h4>
                        </div>
                      </div>
                      <p>Meat Ball, Mie</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="gtco-testimonial"
          className="overlay bg-fixed section-padding"
          //   style="background-image: url(img/testi-bg.jpg);"
        >
          <div className="container">
            <div className="section-content">
              <div className="heading-section text-center">
                <span className="subheading">Testimony</span>
                <h2>Happy Customer</h2>
              </div>
              <div className="row">
                <div className="testi-content testi-carousel owl-carousel">
                  <div className="testi-item">
                    <i className="testi-icon fa fa-3x fa-quote-left"></i>
                    <p className="testi-text">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p className="testi-author">John Doe</p>
                    <p className="testi-desc">
                      CEO of <span>GetTemplates</span>
                    </p>
                  </div>
                  <div className="testi-item">
                    <i className="testi-icon fa fa-3x fa-quote-left"></i>
                    <p className="testi-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Adipisci non doloribus ut, alias doloremque perspiciatis.
                    </p>
                    <p className="testi-author">Mary Jane</p>
                    <p className="testi-desc">
                      CTO of <span>Unidentity Inc</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="gtco-team" className="bg-white section-padding">
          <div className="container">
            <div className="section-content">
              <div className="heading-section text-center">
                <span className="subheading">Specialties</span>
                <h2>Our Team</h2>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="team-card mb-5">
                    <img className="img-fluid" src="img/chef-1.jpg" alt="" />
                    <div className="team-desc">
                      <h4 className="mb-0">Aaron Patel</h4>
                      <p className="mb-1">CEO</p>
                      <ul className="list-inline mb-0 team-social-links">
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fab fa-google-plus-g"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="team-card mb-5">
                    <img className="img-fluid" src="img/chef-2.jpg" alt="" />
                    <div className="team-desc">
                      <h4 className="mb-0">Daniel Tebas</h4>
                      <p className="mb-1">Chef</p>
                      <ul className="list-inline mb-0 team-social-links">
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fab fa-google-plus-g"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="team-card mb-5">
                    <img className="img-fluid" src="img/chef-3.jpg" alt="" />
                    <div className="team-desc">
                      <h4 className="mb-0">Jon Snow</h4>
                      <p className="mb-1">Chef</p>
                      <ul className="list-inline mb-0 team-social-links">
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fab fa-google-plus-g"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="gtco-reservation"
          className="bg-fixed bg-white section-padding overlay"
          //   style="background-image: url(img/reservation-bg.jpg);"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="section-content bg-white p-5 shadow">
                  <div className="heading-section text-center">
                    <span className="subheading">Reservation</span>
                    <h2>Book Now</h2>
                  </div>
                  <form method="post" name="contact-us" action="">
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Name"
                        />
                      </div>
                      <div className="col-md-12 form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Email"
                        />
                      </div>
                      <div className="col-md-12 form-group">
                        <input
                          type="number"
                          className="form-control"
                          id="phoneNumber"
                          name="phoneNumber"
                          placeholder="Phone"
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <div
                          className="input-group date"
                          id="datetimepicker4"
                          data-target-input="nearest"
                        >
                          <input
                            type="text"
                            className="form-control datetimepicker-input"
                            data-target="#datetimepicker4"
                            placeholder="Date"
                          />
                          <div
                            className="input-group-append"
                            data-target="#datetimepicker4"
                            data-toggle="datetimepicker"
                          >
                            <div className="input-group-text">
                              <span className="lnr lnr-calendar-full"></span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 form-group">
                        <div
                          className="input-group date"
                          id="datetimepicker3"
                          data-target-input="nearest"
                        >
                          <input
                            type="text"
                            className="form-control datetimepicker-input"
                            data-target="#datetimepicker3"
                            placeholder="Time"
                          />
                          <div
                            className="input-group-append"
                            data-target="#datetimepicker3"
                            data-toggle="datetimepicker"
                          >
                            <div className="input-group-text">
                              <span className="lnr lnr-clock"></span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12 form-group">
                        <select className="form-control" id="selectPerson">
                          <option></option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>

                      <div className="col-md-12 form-group">
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows="6"
                          placeholder="Your Message ..."
                        ></textarea>
                      </div>
                      <div className="col-md-12 text-center">
                        <button
                          className="btn btn-primary btn-shadow btn-lg"
                          type="submit"
                          name="submit"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="mastfoot pb-5 bg-white section-padding pb-0">
          <div className="inner container">
            <div className="row">
              <div className="col-lg-4">
                <div className="footer-widget pr-lg-5 pr-0">
                  <img
                    src="img/logo.png"
                    className="img-fluid footer-logo mb-3"
                    alt=""
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                    obcaecati quisquam id sit omnis explicabo voluptate aut
                    placeat, soluta, nisi ea magni facere, itaque incidunt modi?
                    Magni, et voluptatum dolorem.
                  </p>
                  <nav className="nav nav-mastfoot justify-content-start">
                    <a className="nav-link" href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="nav-link" href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="nav-link" href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </nav>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="footer-widget px-lg-5 px-0">
                  <h4>Open Hours</h4>
                  <ul className="list-unstyled open-hours">
                    <li className="d-flex justify-content-between">
                      <span>Monday</span>
                      <span>9:00 - 24:00</span>
                    </li>
                    <li className="d-flex justify-content-between">
                      <span>Tuesday</span>
                      <span>9:00 - 24:00</span>
                    </li>
                    <li className="d-flex justify-content-between">
                      <span>Wednesday</span>
                      <span>9:00 - 24:00</span>
                    </li>
                    <li className="d-flex justify-content-between">
                      <span>Thursday</span>
                      <span>9:00 - 24:00</span>
                    </li>
                    <li className="d-flex justify-content-between">
                      <span>Friday</span>
                      <span>9:00 - 02:00</span>
                    </li>
                    <li className="d-flex justify-content-between">
                      <span>Saturday</span>
                      <span>9:00 - 02:00</span>
                    </li>
                    <li className="d-flex justify-content-between">
                      <span>Sunday</span>
                      <span> Closed</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="footer-widget pl-lg-5 pl-0">
                  <h4>Newsletter</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <form id="newsletter">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="emailNewsletter"
                        aria-describedby="emailNewsletter"
                        placeholder="Enter email"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-md-12 d-flex align-items-center">
                <p className="mx-auto text-center mb-0">
                  Copyright 2019. All Right Reserved. Design by{" "}
                  <a href="https://gettemplates.co" target="_blank">
                    GetTemplates
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>{" "}
      </div>
    </>
  );
}
