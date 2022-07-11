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
                Aumentamos la cultura y consumo del café panameño que es exportado
                a diferentes países y no solo darlo a conocer
                internacionalmente, sino, que nacionalmente sea degustado por
                cada uno de nosotros.
              </p>
            </div>
            <div className="col-md-4 col-lg-4 offset-lg-1 footer-contact wow fadeInDown">
              <h3>Contactanos</h3>
              <p>
                <i className="fas fa-map-marker-alt"></i> C. B Nte., Soná
              </p>
              <p>
                <i className="fas fa-phone"></i> Telefono: 933-7450
              </p>
              <p>
                <i className="fas fa-envelope"></i> Correo:{" "}
                <a href="mailto:aliciasCafe@hotmail.com">
                  aliciasCafe@hotmail.com
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 footer-social wow fadeInUp">
              <h3>Siguenos</h3>
              <p>
                <a
                  href="https://web.facebook.com/aliciascafegourmet2012?_rdc=1&_rdr"
                  target="_blank"
                >
                  <FacebookOutlined
                    style={{ fontSize: "36px", color: "#08c" }}
                  />
                </a>
                <a
                  href="https://www.instagram.com/aliciascafegourmet/?hl=es-la"
                  target="_blank"
                >
                  <InstagramOutlined
                    style={{ fontSize: "36px", color: "#08c" }}
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
