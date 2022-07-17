import React, { useEffect } from "react";
import { Layout, Modal, Tabs } from "antd";
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
  const { TabPane } = Tabs;
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
          <Tabs defaultActiveKey="1" centered>
            <TabPane tab="Popular" key="1">
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
            </TabPane>
            <TabPane tab="Hamburguesas" key="2">
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
            </TabPane>
            <TabPane tab="Frappes" key="3">
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
            </TabPane>
          </Tabs>
        </div>
      </Content>
      <FooterComponent />
    </Layout>
  );
};
export default Menu;
