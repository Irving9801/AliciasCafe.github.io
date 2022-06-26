import React, { useEffect } from "react";
import { Layout, Modal } from "antd";
import Header from "../components/Header";
import FooterComponent from "../components/FooterComponent";
import "../assets/css/pages/stylesMenu.css";
import ReactLoading from "react-loading";
import "./in.css";
import { listMenu } from "../redux/action/productosActions";
import { useDispatch, useSelector } from "react-redux";
const { Content } = Layout;
const Menu = () => {
  const dispatch = useDispatch();
  const { loadMenuList } = useSelector((state) => state.productos);
  const listarMenu = useSelector((state) => state.productos.listMenu.products);
  useEffect(() => {
    dispatch(listMenu());
  }, [dispatch]);
  return (
    <Layout className="layout__Main">
      <Header />
      <Content>
        <div class="wrapper">
          <div class="title">
            <h4>Nuestro menu</h4>
          </div>
          {loadMenuList ? (
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
          ) : null}
          <div class="menu">
            {listarMenu?.map((item) => (
              <div class="single-menu">
                <img src={item.image} alt="" />
                <div class="menu-content">
                  <h4>
                    {item.name} <span>${item.price}</span>
                  </h4>
                  <p className="description_text">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Content>
      <FooterComponent />
    </Layout>
  );
};
export default Menu;
