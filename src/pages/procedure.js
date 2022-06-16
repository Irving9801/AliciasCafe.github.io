import React from "react";
import "../assets/css/pages/procedure.css";
import { Divider, Steps } from "antd";

import { Card, Layout, Row, Col, Typography, Image, Button } from "antd";
import Header from "../components/Header";
import FooterComponent from "../components/FooterComponent";
import receta1 from "../assets/recipes/recipe-1.jpeg";
const { Content } = Layout;
const { Step } = Steps;
const procedure = () => {
  return (
    <Layout className="layout__Main">
      <Header />
      <Content>
        <main class="page-recipe-main">
          <div class="recipe-page">
            <section class="recipe-hero">
              <img src={receta1} class="recipe-img-single" />
              <article class="recipe-info">
                <h2>Banana Pancakes</h2>
                <p className="description_text">
                  Shabby chic humblebrag banh mi bushwick, banjo kale chips
                  meggings. Cred selfies sartorial, cloud bread disrupt blue
                  bottle seitan. Dreamcatcher tousled bitters, health goth vegan
                  venmo whatever street art lyft shabby chic pitchfork beard.
                  Drinking vinegar poke tbh, iPhone coloring book polaroid
                  truffaut tousled ramps pug trust fund letterpress. Portland
                  four loko austin chicharrones bitters single-origin coffee.
                  Leggings letterpress occupy pour-over.
                </p>
                <div class="recipe-icons">
                  <article>
                    <i class="fas fa-clock"></i>
                    <h5>prep time</h5>
                    <p>30 min.</p>
                  </article>
                  <article>
                    <i class="far fa-clock"></i>
                    <h5>cook time</h5>
                    <p>15 min.</p>
                  </article>
                  <article>
                    <i class="fas fa-user-friends"></i>
                    <h5>serving</h5>
                    <p>6 servings</p>
                  </article>
                </div>
              </article>
            </section>
            <section class="recipe-content">
              <article>
                <h4>Instrucciones</h4>

                <Steps direction="vertical" current>
                  <Step
                    title="Paso 1"
                    description="I'm baby mustache man braid fingerstache small batch venmo succulents shoreditch."
                  />
                  <Step
                    title="Paso 2"
                    description="Pabst pitchfork you probably haven't heard of them, asymmetrical seitan tousled succulents wolf banh mi man bun bespoke selfies freegan ethical hexagon."
                  />
                  <Step
                    title="Paso 3"
                    description="Polaroid iPhone bitters chambray. Cornhole swag kombucha live-edge."
                  />
                </Steps>
              </article>
              <article class="second-column">
                <div>
                  <h4>Ingredientes</h4>
                  <p class="single-ingredient">1 1/2 cups dry pancake mix</p>
                  <p class="single-ingredient">1/2 cup flax seed meal</p>
                  <p class="single-ingredient">1 cup skim milk</p>
                </div>
                <div>
                  <h4>tools</h4>
                  <p class="single-tool">Hand Blender</p>
                  <p class="single-tool">Large Heavy Pot With Lid</p>
                  <p class="single-tool">Measuring Spoons</p>
                  <p class="single-tool">Measuring Cups</p>
                </div>
              </article>
            </section>
          </div>
        </main>
      </Content>
      <FooterComponent />
    </Layout>
  );
};
export default procedure;
