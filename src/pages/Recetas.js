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
          <Col span={18}>
            <div>
              {recetas.map((receta) => (
                <div className="recipe__div">
                  <Row
                    style={{
                      display: "flex",
                      margin: "5% auto",
                      justifyContent: "start",
                    }}
                  >
                    <Col span={8}>
                      <Image width={200} src={hamburgesa}></Image>
                    </Col>
                    <Col span={10}>
                      <Title>{receta.title}</Title>
                      <Title level={5}>{receta.title1}</Title>
                      <Button type="primary" shape="round">
                        Ver Receta
                      </Button>
                    </Col>
                  </Row>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Content>
      <FooterComponent />
    </Layout>
  );
};
export default Recetas;
