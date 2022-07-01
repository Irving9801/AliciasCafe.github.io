import React, { useEffect } from "react";
import "../assets/css/pages/procedure.css";
import { Layout } from "antd";
import Header from "../components/Header";
import FooterComponent from "../components/FooterComponent";
import ReactLoading from "react-loading";
import receta1 from "../assets/recipes/recipe-1.jpeg";
import { useDispatch, useSelector } from "react-redux";
import "./details.css";
import { getProductsById } from "../redux/action/productosActions";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const { Content } = Layout;
const DetalisEcommerce = () => {
  const dispatch = useDispatch();
  let params = window.location.pathname.slice(9);
  const { listProById } = useSelector((state) => state.productos);
  const { loading } = useSelector((state) => state.productos);
  useEffect(() => {
    dispatch(getProductsById(params));
  }, [dispatch]);
  return (
    <Layout className="layout__Main">
      <Header />
      <Content>
        {(() => {
          if (loading) {
            return (
              <ReactLoading
                type="spokes"
                color="--variable-color-main"
                // height={4}
                // width={4}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "10rem",
                  height: "10rem",
                  margin: "auto",
                }}
              />
            );
          } else if (listProById) {
            return (
              <div class="site-section">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6">
                      <Carousel
                        showThumbs={true}
                        showStatus={false}
                        infiniteLoop
                        // emulateTouch
                        // autoPlay
                        useKeyboardArrows
                        transitionTime={1000}
                      >
                        {listProById?.imagesList?.map((image, index) => (
                          <>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                              <img src={image} />
                            </div>
                          </>
                        ))}
                      </Carousel>
                    </div>
                    <div class="col-md-6 col-detalle">
                      <h2 class="text-black">{listProById.nameProdut}</h2>
                      <p>{listProById.descriptionProduct}</p>
                      <p>
                        <strong class="text-primary h4">
                          {listProById.price}
                        </strong>
                      </p>

                      <div class="mb-5">
                        <div
                          class="input-group mb-3"
                          style={{ maxWidth: "120px" }}
                        >
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
            );
          } else {
            return <>dsftgdfsgsdfg</>;
          }
        })()}
      </Content>
      <FooterComponent />
    </Layout>
  );
};
export default DetalisEcommerce;
