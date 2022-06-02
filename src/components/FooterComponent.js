import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import { Layout, Button, Input, Image, Row, Col, Space } from "antd";
import logo from "../assets/img/logo.png";
export default function App() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <FacebookOutlined style={{ fontSize: 25, color: 'brown'}}/>
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <TwitterOutlined style={{ fontSize: 25, color: 'brown'}}/>
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <InstagramOutlined style={{ fontSize: 25, color: 'brown'}}/>
          </a>
        </section>

        <section className=''>
          <form action=''>
            <div className='row d-flex justify-content-center'>
              <div>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={8}>
            <div>
              
              <Image src={logo} width={100}></Image>
              <br></br>
             loremmksdnvñosdnv kalsdncñNVA ÑWJKAS BKKAK SLKKLDVÑND
              <div>
                <br>
                </br>
              </div>
            
            </div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div>
              <h4 style={{color: "white"}}>Horario</h4>

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
          </Col>
          <Col className="gutter-row" span={8}>
            <div>
              <h4 style={{color: "white"}}>Boletín Informativo</h4>
             Lorem sjdfhnadnlvllak svlskd vakl ñsv askjd csk cskl nc
              <Input style={{ margin: 10 }} placeholder="Correo" />
              <Button type="primary" style={{ margin: 10 }} block danger>
                {" "}
                Enviar{" "}
              </Button>
            </div>
          </Col>
        </Row>
              </div>
            </div>
          </form>
        </section>

  
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright: 
        <a className='text-white' href='#'>
           Anikawi - Irvincio 
        </a>
      </div>
    </MDBFooter>
  );
}