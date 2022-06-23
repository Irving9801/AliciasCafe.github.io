import { Layout } from "antd";
import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/FooterComponent";
import "./ecommerce.css";
import img1 from "./images/cafe.jpg";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../redux/action/productosActions";
const { Content } = Layout;
const Ecommerce = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  const listarProducts = useSelector(
    (state) => state.productos.listProducts.products
  );

  return (
    <Layout className="layout__Main">
      <Header />
      <Content>
        <div class="product-items">
          {listarProducts !== undefined ? (
            <>
              {listarProducts.map((item) => (
                <div class="product">
                  <div class="product-content">
                    <a href={`/details/${item._id}`}>
                      <div class="product-img">
                        <img src={img1} alt="product image" />
                      </div>
                    </a>
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
                      <h2 class="sm-title">{item.nameProdut}</h2>
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
                    {/* <a href="#" class="product-name">
                      {item.descriptionProcduct}
                    </a> */}
                    {item.discount ? (
                      <p class="product-price">${item.discount}</p>
                    ) : (
                      ""
                    )}

                    <p class="product-price">$ {item.price}</p>
                  </div>

                  {/* <div class="off-info">
                    <h2 class="sm-title">25% off</h2>
                  </div> */}
                </div>
              ))}
            </>
          ) : (
            <div>Cargando...</div>
          )}
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};
export default Ecommerce;
