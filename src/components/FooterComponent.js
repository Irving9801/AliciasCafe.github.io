import React from "react";
import { Layout, Button, Input, Image, Row, Col, Space } from "antd";
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';

const {Footer} = Layout;


const FooterComponent = () =>{
    return(
      
        <Footer>
        <div>
           <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={8}>
                <div>
                  <h2>Alicia's Cafe Gourmet</h2>
                  <Image src="img/logo.jpg"></Image>
                  <p>
                  loremmksdnvñosdnv kalsdncñNVA ÑWJKAS BKKAK SLKKLDVÑND
                  </p>
                 <Space>
                     <FacebookOutlined />
                      <TwitterOutlined />
                      <InstagramOutlined />
                 </Space>
                </div>
              </Col>
              <Col className="gutter-row" span={8}>  
                    <div>
                        <h4>Horario</h4>
                        
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
                      <h4>Boletín Informativo</h4>
                      <p>Lorem sjdfhnadnlvllak svlskd vakl ñsv askjd csk cskl nc</p>
                      <Input placeholder="Correo"  />
                      <Button type="primary" block danger> Enviar </Button>
                      </div>
                </Col>
               
            </Row>
        <div >
          <p>Copy Right 2022. Todos los derechos reservados</p>
        </div>
        </div>
      </Footer>

    );
}

export default FooterComponent;
