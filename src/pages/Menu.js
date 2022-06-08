import React, { useEffect } from "react";
import {  Layout, Row, Col } from "antd";
import Header from "../components/Header";
import FooterComponent from "../components/FooterComponent";
import "../assets/css/pages/stylesMenu.css";
import hamburgesa from "../assets/img/recetas/hamburguesa.jpg";

import "./in.css";
// import { listMenu } from "../redux/action.js/menu";
import { useDispatch } from "react-redux";
const { Content } = Layout;
const data = [
  {
    image: hamburgesa,
    name: "Cheesy House Burguer",
    price: "$22.4  c/u",
  },

];
const data1 = [
  {
    image: hamburgesa,
    name: "Cheesy House Burguer",
    price: "$22.4  c/u",
  },
  {
    image: hamburgesa,
    name: "Cheesy House Burguer",
    price: "$5.5  c/u",
  },
  {
    image: hamburgesa,
    name: "Cheesy House Burguer",
    price: "$8  c/u",
  },

  {
    image: hamburgesa,
    name: "Cheesy House Burguer",
    price: "$12.5  c/u",
  },
];
const Menu = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(listMenu());
  }, [dispatch]);
  return (
    <Layout className="layout__Main">
      <Header />
      <Content>
        <hr />
      <p style={{ margin: 5, padding: 15}}>-  - Menú -  -</p>
    <Row>
    <Col xs={{ span: 5, offset: 1, }} lg={{span: 6, offset: 2,}}>
    <h1 style={{display: 'flex',  justifyContent:'left', color: "brown"}}>Entrada</h1>
 
    <Col className="gutter-row" span={8}>
            <div>
              <Row>
                <Col span={8}>Lunessssssssssssssss</Col>
                <Col span={8} offset={8}>
                  <br></br>
                  9:00 
                </Col>
                <Col span={8}>Martes</Col>
                <Col span={8} offset={8}>
                <br></br>
                  9:00
                </Col>
                <Col span={8}>Miercoles</Col>
                <Col span={8} offset={8}>
                <br></br>
                  9:00 
                </Col>
                <Col span={8}>Jueves</Col>
                <Col span={8} offset={8}>
                <br></br>
                  9:00 
                </Col>
                <Col span={8}>Viernes</Col>
                <Col span={8} offset={8}>
                <br></br>
                  9:00
                </Col>
                <Col span={8}>Sabado</Col>
                <Col span={8} offset={8}>
                <br></br>
                  9:00 
                </Col>
              </Row>
            </div>
          </Col>        
        

    </Col>
    <Col xs={{ span: 11,  offset: 1,}} lg={{ span: 6, offset: 2,  }} >
    <h1 style={{display: 'flex',  justifyContent:'left',color: "brown"}}>Desayunos</h1>

    <Col className="gutter-row" span={8}>
            <div>
              <Row>
                <Col span={8}>Lunessssssssssssssss</Col>
                <Col span={8} offset={8}>
                  <br></br>
                  9:00 
                </Col>
                <Col span={8}>Martes</Col>
                <Col span={8} offset={8}>
                <br></br>
                  9:00
                </Col>
                <Col span={8}>Miercoles</Col>
                <Col span={8} offset={8}>
                <br></br>
                  9:00 
                </Col>
                <Col span={8}>Jueves</Col>
                <Col span={8} offset={8}>
                <br></br>
                  9:00 
                </Col>
                <Col span={8}>Viernes</Col>
                <Col span={8} offset={8}>
                <br></br>
                  9:00
                </Col>
                <Col span={8}>Sabado</Col>
                <Col span={8} offset={8}>
                <br></br>
                  9:00 
                </Col>
              </Row>
            </div>
          </Col>   

    </Col>
    <Col xs={{  span: 5, offset: 1,  }}  lg={{  span: 6, offset: 2,}} >
    <h1 style={{display: 'flex',  justifyContent:'Left',color: "brown"}}>Almuerzo</h1>
    <Col className="gutter-row" span={8}>
            <div>
              <Row>
                <Col span={8}>Lunessssssssssssssss</Col>
                <Col span={8} offset={8}>
                  <br></br>
                  9:00 
                </Col>
                <Col span={8}>Martes</Col>
                <Col span={8} offset={8}>
                <br></br>
                  9:00
                </Col>
                <Col span={8}>Miercoles</Col>
                <Col span={8} offset={8}>
                <br></br>
                  9:00 
                </Col>
                <Col span={8}>Jueves</Col>
                <Col span={8} offset={8}>
                <br></br>
                  9:00 
                </Col>
                <Col span={8}>Viernes</Col>
                <Col span={8} offset={8}>
                <br></br>
                  9:00
                </Col>
                <Col span={8}>Sabado</Col>
                <Col span={8} offset={8}>
                <br></br>
                  9:00 
                </Col>
              </Row>
            </div>
          </Col>   


    </Col>
    
  </Row>
  <br></br>
  <hr />
  <Row>
    <Col xs={{ span: 5, offset: 1, }} lg={{span: 6, offset: 2,}}>
    <h1 style={{display: 'flex',  justifyContent:'left', color: "brown"}}>Bebidas</h1>
 
    <Col className="gutter-row" span={8}>
            <div>
              <Row>
                <Col span={8}>Lunessssssssssssssss</Col>
                <Col span={8} offset={8}>
                  <br></br>
                  9:00 
                </Col>
                <Col span={8}>Martes</Col>
                <Col span={8} offset={8}>
                <br></br>
                  9:00
                </Col>
                <Col span={8}>Miercoles</Col>
                <Col span={8} offset={8}>
                <br></br>
                  9:00 
                </Col>
                <Col span={8}>Jueves</Col>
                <Col span={8} offset={8}>
                <br></br>
                  9:00 
                </Col>
                <Col span={8}>Viernes</Col>
                <Col span={8} offset={8}>
                <br></br>
                  9:00
                </Col>
                <Col span={8}>Sabado</Col>
                <Col span={8} offset={8}>
                <br></br>
                  9:00 
                </Col>
              </Row>
            </div>
          </Col>        
        

    </Col>
    <Col xs={{ span: 11,  offset: 1,}} lg={{ span: 6, offset: 2,  }} >
    <h1 style={{display: 'flex',  justifyContent:'left',color: "brown"}}>Postres</h1>

    <Col className="gutter-row" span={8}>
            <div>
              <Row>
                <Col span={8}>Lunessssssssssssssss</Col>
                <Col span={8} offset={8}>
                  <br></br>
                  9:00 
                </Col>
                <Col span={8}>Martes</Col>
                <Col span={8} offset={8}>
                <br></br>
                  9:00
                </Col>
                <Col span={8}>Miercoles</Col>
                <Col span={8} offset={8}>
                <br></br>
                  9:00 
                </Col>
                <Col span={8}>Jueves</Col>
                <Col span={8} offset={8}>
                <br></br>
                  9:00 
                </Col>
                <Col span={8}>Viernes</Col>
                <Col span={8} offset={8}>
                <br></br>
                  9:00
                </Col>
                <Col span={8}>Sabado</Col>
                <Col span={8} offset={8}>
                <br></br>
                  9:00 
                </Col>
              </Row>
            </div>
          </Col>   

    </Col>
    <Col xs={{  span: 5, offset: 1,  }}  lg={{  span: 6, offset: 2,}} >
    <h1 style={{display: 'flex',  justifyContent:'Left',color: "brown"}}>Frappe</h1>
    <Col className="gutter-row" span={8}>
            <div>
              <Row>
                <Col span={8}>Lunessssssssssssssss</Col>
                <Col span={8} offset={8}>
                  <br></br>
                  9:00 
                </Col>
                <Col span={8}>Martes</Col>
                <Col span={8} offset={8}>
                <br></br>
                  9:00
                </Col>
                <Col span={8}>Miercoles</Col>
                <Col span={8} offset={8}>
                <br></br>
                  9:00 
                </Col>
                <Col span={8}>Jueves</Col>
                <Col span={8} offset={8}>
                <br></br>
                  9:00 
                </Col>
                <Col span={8}>Viernes</Col>
                <Col span={8} offset={8}>
                <br></br>
                  9:00
                </Col>
                <Col span={8}>Sabado</Col>
                <Col span={8} offset={8}>
                <br></br>
                  9:00 
                </Col>
              </Row>
            </div>
          </Col>   


    </Col>
    
  </Row>
  </Content>
  <br></br>
  <FooterComponent />
  </Layout>
   
  );
};
export default Menu;
