import React from "react";
import { Card, Layout, Row, Col, Typography, Image, Button } from "antd";
import Header from "../components/Header";
import FooterComponent from "../components/FooterComponent";
import hamburgesa from "../assets/img/recetas/hamburguesa.jpg";
import "../assets/css/pages/style.css";
const { Content } = Layout;
const { Meta } = Card;
const { Title } = Typography;
const recetas = [
  {
    img: hamburgesa,
    title: "Cheesy House Burguer",
    title1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    img: hamburgesa,
    title: "Cheesy House Burguer",
    title1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    img: hamburgesa,
    title: "Cheesy House Burguer",
    title1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    img: hamburgesa,
    title: "Cheesy House Burguer",
    title1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];
const Recetas = () => {
  return (
    <Layout className="layout__Main">
      <Header />
      <Content>
        <Row>
          <Col span={6} push={18}>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={<img alt="example" src={hamburgesa} />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col span={18} pull={6}>
            <div className="recipe__div">
              <Image className="recipe_Main" src={hamburgesa}></Image>
              <Title>Cheesy House Burguer</Title>
              <Title level={5}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </Title>
            </div>
          </Col>
          <Col span={18} style={{margin:"auto"}}>
            {recetas.map((receta, index) => (
              <div className="main_divvv">
                <div className="second_div">
                  <img
                    class="img_class"
                    data-width="320"
                    data-height="320"
                    data-webp="1"
                    alt="Paso 1"
                    title="Paso 1"
                    src={hamburgesa}
                  />
                </div>

                <div className="number">
                  <div className="number_son">{index}</div>

                  <div className="description">
                    <a href="facebook.com/"
                      // target="_blank"
                      className="titulo-resaltado"
                    >
                      {receta.title}
                    </a>
                   {receta.title1}
                    <Button className="btn-receta-tip">Ver receta</Button>
                  </div>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Content>
      <FooterComponent />
    </Layout>
  );
};
export default Recetas;
