import React, { useEffect } from "react";
import "../assets/css/pages/procedure.css";
import { Steps, Layout, Col, Row } from "antd";
import Header from "../components/Header";
import FooterComponent from "../components/FooterComponent";
import { getRecipesById } from "../redux/action/recipesAction";
import { useDispatch, useSelector } from "react-redux";
const { Content } = Layout;
const { Step } = Steps;
const Procedure = () => {
  const dispatch = useDispatch();
  let params = window.location.pathname.slice(11);
  const recipeById = useSelector((state) => state.recipes.listById);
  useEffect(() => {
    dispatch(getRecipesById(params));
  }, [dispatch]);
  let ingredientes = recipeById?.Ingredientes;
  return (
    <Layout className="layout__Main">
      <Header />
      <Content>
        <main class="page-recipe-main">
          <div class="recipe-page">
            <section class="recipe-hero">
              <img src={recipeById?.image} class="recipe-img-single" />
              <article class="recipe-info">
                <h2>{recipeById?.nameRecipes}</h2>
                <p className="description_text">
                  {recipeById?.descriptionRecipes}
                </p>
                <div class="recipe-icons">
                  <article>
                    <i class="fas fa-clock"></i>
                    <h5>prep time</h5>
                    <p>{recipeById?.preTime}</p>
                  </article>
                  <article>
                    <i class="far fa-clock"></i>
                    <h5>cook time</h5>
                    <p>{recipeById?.cookTime}</p>
                  </article>
                  <article>
                    <i class="fas fa-user-friends"></i>
                    <h5>serving</h5>
                    <p>6 servings</p>
                  </article>
                </div>
              </article>
            </section>
            {/* <section class="recipe-content"> */}
            <Row gutter={[40, 48]} style={{ margin: 20 }}>
              <Col xl={12} sm={24}>
                <h4>Instrucciones</h4>

                {recipeById?.Instruccion?.map((item, index) => (
                  <Steps direction="vertical" current>
                    <Step title={"paso " + `${index + 1}`} description={item} />
                  </Steps>
                ))}
              </Col>
              <Col xl={12} sm={24}>
                <h4>Ingredientes</h4>
                {ingredientes?.map((item, index) => (
                  <div key={index}>
                    <p class="single-ingredient">{item}</p>
                  </div>
                ))}
              </Col>
            </Row>
            {/* </section> */}
          </div>
        </main>
      </Content>
      <FooterComponent />
    </Layout>
  );
};
export default Procedure;
