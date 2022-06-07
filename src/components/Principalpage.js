import React from "react";
import { useState } from 'react';
import {  Carousel, Col, Image, Layout, Row, Button, Radio } from "antd";
import "./paginaprincipal.css";
import { PlayCircleOutlined, FormOutlined, WechatOutlined, ShopOutlined, LeftCircleFilled } from '@ant-design/icons';
const contentStyle = {
  height: '400px',
  color: '#fff',
  lineHeight: '400px',
  textAlign: 'center',
  background: '#364d79',
};

const contentStyle2 = {
  height: '360px',
  color: '#fff',
  lineHeight: '360px',
  textAlign: 'center',
  background: '#364d79',
};

const Principalpage = () =>{
  const [dotPosition, setDotPosition] = useState('right');

  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };

    return(
      <section style={{margin:10}}>
        <div >
          <hr></hr>
       <p id="paginaprincipal" style={{ margin: 20, padding: 20}}>¡Amamos la comida deliciosa!</p>
        <br>
        </br>
        <div >
        <Row justify="space-around" align="middle" style={{padding: 20}}>
              <Col xs={{ span: 5, offset: 1, }} lg={{ span: 6, offset: 2, }} >
              <FormOutlined style={{ fontSize: 30, color: 'brown'}}/>
           
              Resetas Actualizadas
              
              </Col>
              <Col xs={{ span: 11, offset: 1, }} lg={{ span: 6, offset: 2, }}>
               <ShopOutlined  style={{ fontSize: 30, color: 'brown'}}/>

                Tienda online
                
              </Col>
              <Col xs={{ span: 5, offset: 1, }} lg={{ span: 6, offset: 2, }}>
              <WechatOutlined style={{ fontSize: 30, color: 'brown'}}/>

               Siempre en línea

              </Col>
            </Row>
        </div>
        <div>
            <Carousel dotPosition={dotPosition} autoplay>
                <div>
                  <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
    <Radio.Group/>
        </div>
     <a href="#"><Button style={{ margin: 20,}} type="danger"> Explorar Menú</Button></a>
        <a href="#"><Button denger type="link" shape="round" icon={<PlayCircleOutlined />}>Play Video</Button></a>
       
        <div>
          <br>
          </br>
          <Row gutter={[8, 8]} style={{ width: "80%", margin: "auto" }}>
          <Col span={12}>
            Welcome to Resto On her way she met a copy. The copy warned the
            Little Blind Text, that where it came from it would have been
            rewritten a thousand times and everything that was left from its
            origin would be the word "and" and the Little Blind Text should turn
            around and return to its own, safe country. A small river named
            Duden flows by their place and supplies it with the necessary
            regelialia. It is a paradisematic country, in which roasted parts of
            sentences fly into your mouth.
          </Col>
          <Col span={12}>
            <Carousel autoplay>
              <div>
              <Image
                  width={360}
                  src="https://i.ibb.co/Y2grPtK/OIP.jpg"
                  style={contentStyle2} />
              </div>
              <div>
              <Image
                  width={360}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  style={contentStyle2}/>
              </div>
              <div>
              <Image
                  width={360}
                  src="https://i.ibb.co/dLtCSmv/R.jpg"
                  style={contentStyle2}/>
              </div>
              <div>
              <Image
                  width={360}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  contentStyle2/>
              </div>
            </Carousel>
          </Col>
        </Row>
        </div>
        </div>  
        </section>    
       
    );
}

export default Principalpage;