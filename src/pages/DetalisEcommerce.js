import React, { useEffect } from "react";
import "../assets/css/pages/procedure.css";
import { Layout } from "antd";
import Header from "../components/Header";
import FooterComponent from "../components/FooterComponent";
import receta1 from "../assets/recipes/recipe-1.jpeg";
import { useDispatch, useSelector } from "react-redux";
import "./details.css";
import { getProductsById } from "../redux/action/productosActions";
const { Content } = Layout;
const DetalisEcommerce = () => {
  const dispatch = useDispatch();
  let params = window.location.pathname.slice(9);
  const productsById = useSelector((state) => state.productos.listProById);
  useEffect(() => {
    dispatch(getProductsById(params));
  }, [dispatch]);
  let producto = productsById;
  return (
    <Layout className="layout__Main">
      <Header />
      <Content>
        <div class="site-section">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <img src={receta1} alt="Image" class="img-fluid" />
              </div>
              <div class="col-md-6 col-detalle">
                <h2 class="text-black">{producto.nameProdut}</h2>
                <p>{producto.descriptionProcduct}</p>
                <p>
                  <strong class="text-primary h4">{producto.price}</strong>
                </p>

                <div class="mb-5">
                  <div class="input-group mb-3" style={{ maxWidth: "120px" }}>
                    <div class="input-group-prepend">
                      <button
                        class="btn btn-outline-primary js-btn-minus"
                        type="button"
                      >
                        -
                      </button>
                    </div>
                    <input
                      type="text"
                      class="form-control text-center"
                      value="1"
                      placeholder=""
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
                    />
                    <div class="input-group-append">
                      <button
                        class="btn btn-outline-primary js-btn-plus"
                        type="button"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                {/* <p>
                  <a href="cart.html" class="buy-now btn btn-sm btn-primary">
                    Add To Cart
                  </a>
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </Content>
      <FooterComponent />
    </Layout>
  );
};
export default DetalisEcommerce;
