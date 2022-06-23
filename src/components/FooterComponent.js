import React from "react";
import logo from "../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";
import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons";
export default function App() {
  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-4 footer-about wow fadeInUp">
              <img
                className="logo-footer"
                src={logo}
                alt="logo-footer"
                data-at2x={logo}
              />
              <p className="footer-p">
                We are a young company always looking for new and creative ideas
                to help you with our products in your everyday work.
              </p>
            </div>
            <div className="col-md-4 col-lg-4 offset-lg-1 footer-contact wow fadeInDown">
              <h3>Contactanos</h3>
              <p>
                <i className="fas fa-map-marker-alt"></i> Via Rossini 10, 10136
                Turin Italy
              </p>
              <p>
                <i className="fas fa-phone"></i> Phone: (0039) 333 12 68 347
              </p>
              <p>
                <i className="fas fa-envelope"></i> Email:{" "}
                <a href="mailto:hello@domain.com">hello@domain.com</a>
              </p>
              <p>
                <i className="fab fa-skype"></i> Skype: you_online
              </p>
            </div>
            <div className="col-md-4 col-lg-3 footer-social wow fadeInUp">
              <h3>Siguenos</h3>
              <p>
                <FacebookOutlined style={{ fontSize: "36px", color: "#08c" }} />
                <InstagramOutlined
                  style={{ fontSize: "36px", color: "#08c" }}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
