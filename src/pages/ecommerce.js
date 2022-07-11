import { Layout } from "antd";
import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/FooterComponent";
import ReactLoading from "react-loading";
import "./ecommerce.css";
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

  const { loadingList } = useSelector((state) => state.productos);
  return (
    <Layout className="layout__Main">
      <Header />
      <Content>
        {(() => {
          if (loadingList) {
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
          } else if (listarProducts) {
            return (
              <div class="product-items">
                {listarProducts?.map((item) => (
                  <div class="product">
                    <div class="product-content">
                      <a href={`/details/${item._id}`}>
                        <div class="product-img">
                          <img
                            src={item.imagesList[0][0]}
                            alt="product image"
                          />
                        </div>
                      </a>
                    </div>
                    <div class="product-info">
                      <div class="product-info-top">
                        <h2 class="sm-title">{item.nameProdut}</h2>
                        
                      </div>

                      {item.discount ? (
                        <p class="product-price">${item.discount}</p>
                      ) : (
                        ""
                      )}
                      <p class="product-price">$ {item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            );
          } else {
            return <>dsftgdfsgsdfg</>;
          }
        })()}
      </Content>
      <Footer />
    </Layout>
  );
};
export default Ecommerce;
