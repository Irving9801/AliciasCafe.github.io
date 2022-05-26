import React from "react";
import { Card, Layout, Row, Col, Typography, Image, Button } from "antd";
import Header from "../components/Header";
import FooterComponent from "../components/FooterComponent";
import "../assets/css/pages/stylesMenu.css";
import styled from "styled-components";
import hamburgesa from "../assets/img/recetas/hamburguesa.jpg";
import {
  imageZoomEffect,
  TitleStyles,
} from "../../src/assets/css/pages/ReusableStyles";
const { Content } = Layout;
const { Meta } = Card;
const { Title } = Typography;
const data = [
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
  return (
    <Layout className="layout__Main">
      <Header />
      <Content>
        <div className="item">
          <img src={hamburgesa} alt="food" />
          <div className="item-head_desc">
            <p className="head_desc-name">irin</p>
            <p className="head_desc-info">
              <small>mama</small>
            </p>
          </div>
          <div className="item-foot_desc">
            <span className="foot_desc-price">$1</span>
            {/* <ButtonAddRemoveItem
              quantity={handleQuantity()}
              handleRemoveItem={() => cartRemoveItem(item)}
              handleAddItem={() => cartAddItem(item)}
            /> */}
          </div>
        </div>
      </Content>
      <FooterComponent />
    </Layout>
  );
};
export default Menu;
