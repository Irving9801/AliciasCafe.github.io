import React, { useEffect, useState } from "react";
import "../assets/css/pages/procedure.css";
import { Layout } from "antd";
import Header from "../components/Header";
import FooterComponent from "../components/FooterComponent";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import receta1 from "../assets/recipes/recipe-1.jpeg";
import { useDispatch, useSelector } from "react-redux";
import "./details.css";
import { getProductsById } from "../redux/action/productosActions";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { addToCart } from "../redux/action/cartActions";
const { Content } = Layout;
const DetalisEcommerce = ({ history }) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  let navigate = useNavigate();
  let params = window.location.pathname.slice(9);
  const addToCartHandler = () => {
    dispatch(addToCart(params, 1));

    navigate(`/cart/${params}?qty=${qty}`);
  };
  const { listProById } = useSelector((state) => state.productos);
  const { loading } = useSelector((state) => state.productos);
  useEffect(() => {
    dispatch(getProductsById(params));
  }, [dispatch]);

  console.log(listProById.countInStock);
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
                        useKeyboardArrows
                        transitionTime={1000}
                      >
                        {listProById?.imagesList?.map((image, index) => (
                          <>
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <img src={image[0]} />
                            </div>
                          </>
                        ))}
                      </Carousel>
                    </div>
                    <div class="col-md-6 col-detalle">
                      <h2 class="text-black">{listProById.nameProdut}</h2>
                      <p>{listProById.descriptionProduct}</p>

                      <Col md={3} lg={6}>
                        <Card>
                          <ListGroup variant="flush">
                            <ListGroup.Item>
                              <Row>
                                <Col>Price:</Col>
                                <Col>
                                  <strong>${listProById.price}</strong>
                                </Col>
                              </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                              <Row>
                                <Col>Estado:</Col>
                                <Col>
                                  {listProById.countInStock > 0
                                    ? "En Stock"
                                    : "Agotado"}
                                </Col>
                              </Row>
                            </ListGroup.Item>

                            {listProById.countInStock > 0 && (
                              <ListGroup.Item>
                                <Row>
                                  <Col>Cantidad</Col>
                                  <Col>
                                    <Form.Control
                                      as="select"
                                      value={qty}
                                      onChange={(e) => setQty(e.target.value)}
                                    >
                                      {[
                                        ...Array(
                                          listProById.countInStock
                                        ).keys(),
                                      ].map((x) => (
                                        <option key={x + 1} value={x + 1}>
                                          {x + 1}
                                        </option>
                                      ))}
                                    </Form.Control>
                                  </Col>
                                </Row>
                              </ListGroup.Item>
                            )}

                            <ListGroup.Item>
                              <Button
                                onClick={addToCartHandler}
                                className="btn-block"
                                type="button"
                                // disabled={product.countInStock === 0}
                              >
                                Agregar
                              </Button>
                            </ListGroup.Item>
                          </ListGroup>
                        </Card>
                      </Col>
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
