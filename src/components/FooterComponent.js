import React from "react";
import { MDBFooter, MDBContainer } from "mdb-react-ui-kit";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import { Button, Input, Image, Row, Col } from "antd";
import logo from "../assets/img/logo.png";
export default function App() {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-4">
        <section className="mb-4">
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <FacebookOutlined style={{ fontSize: 25, color: "brown" }} />
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <TwitterOutlined style={{ fontSize: 25, color: "brown" }} />
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <InstagramOutlined style={{ fontSize: 25, color: "brown" }} />
          </a>
        </section>

        <section className="">
          <form action="">
            <div className="row d-flex justify-content-center">
              <div>
                <Row
                  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                  className="footer__style"
                >
                  <Col
                    className="gutter-row"
                    xs={24}
                    sm={4}
                    md={6}
                    lg={8}
                    xl={10}
                  >
                    <div>
                      <Image src={logo} width={100}></Image>
                      <br></br>
                      loremmksdnvñosdnv kalsdncñNVA ÑWJKAS BKKAK SLKKLDVÑND
                      <div>
                        <br></br>
                      </div>
                    </div>
                  </Col>
                  <Col
                    className="gutter-row"
                    xs={24}
                    sm={4}
                    md={6}
                    lg={8}
                    xl={10}
                  >
                    <div>
                      <h4 style={{ color: "white" }}>Boletín Informativo</h4>
                      Lorem sjdfhnadnlvllak svlskd vakl ñsv askjd csk cskl nc
                      <Input placeholder="Correo" />
                      <Button
                        type="primary"
                        style={{ marginTop: 10 }}
                        block
                        danger
                      >
                        Enviar
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </form>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Copyright:
        <a className="text-white" href="#">
          Anikawi - Irvincio
        </a>
      </div>
    </MDBFooter>
  );
}
