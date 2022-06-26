import React, { useEffect } from "react";
import { Layout } from "antd";
import Header from "../components/Header";
import FooterComponent from "../components/FooterComponent";
import "../assets/css/pages/recetas.css";
import { useDispatch, useSelector } from "react-redux";
import receta1 from "../assets/recipes/recipe-1.jpeg";
import { listRecipes } from "../redux/action/recipesAction";
const { Content } = Layout;

const Recetas = () => {
  const dispatch = useDispatch();
  const listarRecetas = useSelector(
    (state) => state.recipes.listRecipes.recipes
  );
  useEffect(() => {
    dispatch(listRecipes());
  }, [dispatch]);
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
              {listarRecetas?.map((item) => (
                <>
                  <a href={`/procedure/${item._id}`} className="recipe">
                    <img src={receta1} class="img recipe-img" alt="" />
                    <h5>{item.nameRecipes}</h5>
                    <p>
                      Prep : {item.preTime} | Cook : {item.cookTime}
                    </p>
                  </a>
                </>
              ))}
            </div>
          </section>
        </main>
      </Content>
      <FooterComponent />
    </Layout>
  );
};
export default Recetas;
