import React from "react";
import { Card, Layout, Row, Col, Typography, Image, Button } from "antd";
import Header from "../components/Header";
import FooterComponent from "../components/FooterComponent";
import hamburgesa from "../assets/img/recetas/hamburguesa.jpg";
import "../assets/css/pages/recetas.css";
import receta1 from "../assets/recipes/recipe-1.jpeg";
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
        <main class="page">
          <header class="hero">
            <div class="hero-container">
            <div class="row">
                <div class="col-lg-10 col-12 mx-auto">
                  <h1 class="text-white">Alicia's Cafe Gourmet</h1>

                  <strong class="text-white">
                    this is how our kitchen evolved in new digital era
                  </strong>
                </div>
              </div>
            </div>
          </header>
          <section class="recipes-container">
            <div class="tags-container">
              <h4>recipes</h4>
              <div class="tags-list">
                <a href="tag-template.html">Beef (1)</a>
                <a href="tag-template.html">Breakfast (2)</a>
                <a href="tag-template.html">Carrots (3)</a>
                <a href="tag-template.html">Food (4)</a>
              </div>
            </div>
            <div class="recipes-list">
              <a href="/procedure" class="recipe">
                <img
                  src={receta1}
                  class="img recipe-img"
                  alt=""
                />
                <h5>Carne Asada</h5>
                <p>Prep : 15min | Cook : 5min</p>
              </a>

              <a href="single-recipe.html" class="recipe">
                <img
                  src="./assets/recipes/recipe-2.jpeg"
                  class="img recipe-img"
                  alt=""
                />
                <h5>Greek Ribs</h5>
                <p>Prep : 15min | Cook : 5min</p>
              </a>

              <a href="single-recipe.html" class="recipe">
                <img
                  src="./assets/recipes/recipe-3.jpeg"
                  class="img recipe-img"
                  alt=""
                />
                <h5>Vegetable Soup</h5>
                <p>Prep : 15min | Cook : 5min</p>
              </a>

              <a href="single-recipe.html" class="recipe">
                <img
                  src="./assets/recipes/recipe-4.jpeg"
                  class="img recipe-img"
                  alt=""
                />
                <h5>Banana Pancakes</h5>
                <p>Prep : 15min | Cook : 5min</p>
              </a>
            </div>
          </section>
        </main>
      </Content>
      <FooterComponent />
    </Layout>
  );
};
export default Recetas;
