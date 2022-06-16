import { Layout } from "antd";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/FooterComponent";
import "./ecommerce.css";
import img1 from "./images/cafe.jpg";
const { Content } = Layout;
const Ecommerce = () => {
  return (
    <Layout className="layout__Main">
      <Header />
      <Content>
        <div class="product-items">
          <div class="product">
            <div class="product-content">
              <div class="product-img">
                <img src={img1} alt="product image" />
              </div>
              <div class="product-btns">
                <button type="button" class="btn-cart">
                  {" "}
                  add to cart
                  <span>
                    <i class="fas fa-plus"></i>
                  </span>
                </button>
                <button type="button" class="btn-buy">
                  {" "}
                  buy now
                  <span>
                    <i class="fas fa-shopping-cart"></i>
                  </span>
                </button>
              </div>
            </div>

            <div class="product-info">
              <div class="product-info-top">
                <h2 class="sm-title">lifestyle</h2>
                <div class="rating">
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="far fa-star"></i>
                  </span>
                </div>
              </div>
              <a href="#" class="product-name">
                Cafe para vender jiji
              </a>
              <p class="product-price">$ 150.00</p>
              <p class="product-price">$ 133.00</p>
            </div>

            <div class="off-info">
              <h2 class="sm-title">25% off</h2>
            </div>
          </div>
          <div class="product">
            <div class="product-content">
              <div class="product-img">
                <img src={img1} alt="product image" />
              </div>
              <div class="product-btns">
                <button type="button" class="btn-cart">
                  {" "}
                  add to cart
                  <span>
                    <i class="fas fa-plus"></i>
                  </span>
                </button>
                <button type="button" class="btn-buy">
                  {" "}
                  buy now
                  <span>
                    <i class="fas fa-shopping-cart"></i>
                  </span>
                </button>
              </div>
            </div>

            <div class="product-info">
              <div class="product-info-top">
                <h2 class="sm-title">lifestyle</h2>
                <div class="rating">
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="far fa-star"></i>
                  </span>
                </div>
              </div>
              <a href="#" class="product-name">
                Cafe para vender jiji
              </a>
              <p class="product-price">$ 150.00</p>
              <p class="product-price">$ 133.00</p>
            </div>
          </div>

          <div class="product">
            <div class="product-content">
              <div class="product-img">
                <img src={img1} alt="product image" />
              </div>
              <div class="product-btns">
                <button type="button" class="btn-cart">
                  {" "}
                  add to cart
                  <span>
                    <i class="fas fa-plus"></i>
                  </span>
                </button>
                <button type="button" class="btn-buy">
                  {" "}
                  buy now
                  <span>
                    <i class="fas fa-shopping-cart"></i>
                  </span>
                </button>
              </div>
            </div>

            <div class="product-info">
              <div class="product-info-top">
                <h2 class="sm-title">lifestyle</h2>
                <div class="rating">
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="far fa-star"></i>
                  </span>
                </div>
              </div>
              <a href="#" class="product-name">
                Cafe para vender jiji
              </a>
              <p class="product-price">$ 150.00</p>
              <p class="product-price">$ 133.00</p>
            </div>
          </div>

          <div class="product">
            <div class="product-content">
              <div class="product-img">
              <img src={img1} alt="product image" />
              </div>
              <div class="product-btns">
                <button type="button" class="btn-cart">
                  {" "}
                  add to cart
                  <span>
                    <i class="fas fa-plus"></i>
                  </span>
                </button>
                <button type="button" class="btn-buy">
                  {" "}
                  buy now
                  <span>
                    <i class="fas fa-shopping-cart"></i>
                  </span>
                </button>
              </div>
            </div>

            <div class="product-info">
              <div class="product-info-top">
                <h2 class="sm-title">lifestyle</h2>
                <div class="rating">
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="far fa-star"></i>
                  </span>
                </div>
              </div>
              <a href="#" class="product-name">
                Cafe para vender jiji
              </a>
              <p class="product-price">$ 150.00</p>
              <p class="product-price">$ 133.00</p>
            </div>

            <div class="off-info">
              <h2 class="sm-title">25% off</h2>
            </div>
          </div>

          <div class="product">
            <div class="product-content">
              <div class="product-img">
                  <img src={img1} alt="product image" />
              </div>
              <div class="product-btns">
                <button type="button" class="btn-cart">
                  {" "}
                  add to cart
                  <span>
                    <i class="fas fa-plus"></i>
                  </span>
                </button>
                <button type="button" class="btn-buy">
                  {" "}
                  buy now
                  <span>
                    <i class="fas fa-shopping-cart"></i>
                  </span>
                </button>
              </div>
            </div>

            <div class="product-info">
              <div class="product-info-top">
                <h2 class="sm-title">lifestyle</h2>
                <div class="rating">
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="far fa-star"></i>
                  </span>
                </div>
              </div>
              <a href="#" class="product-name">
                Cafe para vender jiji
              </a>
              <p class="product-price">$ 150.00</p>
              <p class="product-price">$ 133.00</p>
            </div>
          </div>

          <div class="product">
            <div class="product-content">
              <div class="product-img">
              <img src={img1} alt="product image" />
              </div>
              <div class="product-btns">
                <button type="button" class="btn-cart">
                  {" "}
                  add to cart
                  <span>
                    <i class="fas fa-plus"></i>
                  </span>
                </button>
                <button type="button" class="btn-buy">
                  {" "}
                  buy now
                  <span>
                    <i class="fas fa-shopping-cart"></i>
                  </span>
                </button>
              </div>
            </div>

            <div class="product-info">
              <div class="product-info-top">
                <h2 class="sm-title">lifestyle</h2>
                <div class="rating">
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="far fa-star"></i>
                  </span>
                </div>
              </div>
              <a href="#" class="product-name">
                Cafe para vender jiji
              </a>
              <p class="product-price">$ 150.00</p>
              <p class="product-price">$ 133.00</p>
            </div>
          </div>

          <div class="product">
            <div class="product-content">
              <div class="product-img">
              <img src={img1} alt="product image" />
              </div>
              <div class="product-btns">
                <button type="button" class="btn-cart">
                  {" "}
                  add to cart
                  <span>
                    <i class="fas fa-plus"></i>
                  </span>
                </button>
                <button type="button" class="btn-buy">
                  {" "}
                  buy now
                  <span>
                    <i class="fas fa-shopping-cart"></i>
                  </span>
                </button>
              </div>
            </div>

            <div class="product-info">
              <div class="product-info-top">
                <h2 class="sm-title">lifestyle</h2>
                <div class="rating">
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="far fa-star"></i>
                  </span>
                </div>
              </div>
              <a href="#" class="product-name">
                Cafe para vender jiji
              </a>
              <p class="product-price">$ 150.00</p>
              <p class="product-price">$ 133.00</p>
            </div>
          </div>

          <div class="product">
            <div class="product-content">
              <div class="product-img">
              <img src={img1} alt="product image" />
              </div>
              <div class="product-btns">
                <button type="button" class="btn-cart">
                  {" "}
                  add to cart
                  <span>
                    <i class="fas fa-plus"></i>
                  </span>
                </button>
                <button type="button" class="btn-buy">
                  {" "}
                  buy now
                  <span>
                    <i class="fas fa-shopping-cart"></i>
                  </span>
                </button>
              </div>
            </div>

            <div class="product-info">
              <div class="product-info-top">
                <h2 class="sm-title">lifestyle</h2>
                <div class="rating">
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="far fa-star"></i>
                  </span>
                </div>
              </div>
              <a href="#" class="product-name">
                Cafe para vender jiji
              </a>
              <p class="product-price">$ 150.00</p>
              <p class="product-price">$ 133.00</p>
            </div>

            <div class="off-info">
              <h2 class="sm-title">35% off</h2>
            </div>
          </div>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};
export default Ecommerce;
