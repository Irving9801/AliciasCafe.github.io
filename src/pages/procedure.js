import React, { useEffect } from "react";
import "../assets/css/pages/procedure.css";
import { Steps, Layout } from "antd";
import Header from "../components/Header";
import FooterComponent from "../components/FooterComponent";
import receta1 from "../assets/recipes/recipe-1.jpeg";
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
  let ingredientes = recipeById.Ingredientes;
  return (
    <Layout className="layout__Main">
      <Header />
      <Content>
        <main class="page-recipe-main">
          <div class="recipe-page">
            <section class="recipe-hero">
              <img src={receta1} class="recipe-img-single" />
              <article class="recipe-info">
                <h2>{recipeById.nameRecipes}</h2>
                <p className="description_text">
                  {recipeById.descriptionRecipes}
                </p>
                <div class="recipe-icons">
                  <article>
                    <i class="fas fa-clock"></i>
                    <h5>prep time</h5>
                    <p>{recipeById.preTime}</p>
                  </article>
                  <article>
                    <i class="far fa-clock"></i>
                    <h5>cook time</h5>
                    <p>{recipeById.cookTime}</p>
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
                {ingredientes !== undefined ? (
                  <div>
                    <h4>Ingredientes</h4>
                    {ingredientes.map((item, index) => (
                      <div key={index}>
                        <p class="single-ingredient">{item.name}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>Cargando...</div>
                )}
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
export default Procedure;
