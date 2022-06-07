import React, { useEffect } from "react";
import {  Layout } from "antd";
import Header from "../components/Header";
import FooterComponent from "../components/FooterComponent";
import "../assets/css/pages/stylesMenu.css";
import hamburgesa from "../assets/img/recetas/hamburguesa.jpg";

import "./in.css";
import { listMenu } from "../redux/action.js/menu";
import { useDispatch } from "react-redux";
const { Content } = Layout;
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
    dispatch(listMenu());
  }, [dispatch]);
  return (
    <Layout className="layout__Main">
      <Header />
      <Content>
        <div className="c-thumb-list__grid">
          {data.map((item) => (
            <a href="facebook.com" className="c-thumb">
              <span className="c-thumb__inner">
                <span className="c-thumb__top">
                  <span className="c-thumb__price">$19.00</span>
                </span>
                <span className="c-thumb__asset">
                  <picture className="o-asset c-thumb__img">
                    <img src={hamburgesa} alt="MDN"></img>
                  </picture>
                </span>
                <span className="c-thumb__content">
                  <h3 data-v-28396ab7="" class="c-thumb__title | t-t3">
                    Kale césar
                  </h3>
                  <span className="c-thumb__price">$19.00</span>
                  <p data-v-28396ab7="" class="c-thumb__desc | t-xs text-dark">
                    Kale, laitue frisée, poulet, patate douce, tomate cerise,
                    concombre, bacon, croûton sans gluten, cheddar de
                    l’Île-aux-Grues, citron, anchoïade, vinaigrette césar.
                  </p>
                </span>
              </span>
            </a>
          ))}
        </div>
      </Content>
      <FooterComponent />
    </Layout>
  );
};
export default Menu;
