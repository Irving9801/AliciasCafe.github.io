import { Row, Col, Card, Input, Form, Typography, Button } from "antd";
import React, { useEffect } from "react";

// Images
import Main from "../../components/layout/Main";
import { useDispatch, useSelector } from "react-redux";
import { deleteRecipes } from "../../../redux/action/recipesAction";
import {
  deleteProduct,
  getProductsById,
} from "../../../redux/action/productosActions";
function DetailsProducts() {
  let params = window.location.pathname.slice(16);
  const dispatch = useDispatch();
  const { nameProdut, category, price, descriptionProcduct } = useSelector(
    (state) => state.productos.listProById
  );
  const { deleteLoadProd } = useSelector((state) => state.productos);
  useEffect(() => {
    dispatch(getProductsById(params));
  }, [dispatch]);
  const { Text } = Typography;
  const handleDelete = () => {
    dispatch(deleteProduct(params));
  };
  return (
    <Main>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Detalle de producto"
            >
              <div className="table-responsive">
                <Form>
                  <Row gutter={8}>
                    <Col
                      xs={{ span: 20 }}
                      sm={{ span: 20 }}
                      md={{ span: 8 }}
                      lg={{ span: 8 }}
                    >
                      <Text
                        strong
                        className="Tablet, Phone"
                        style={{ padding: "5px" }}
                      >
                        Nombre de receta
                      </Text>

                      <Form.Item>
                        <Input
                          placeholder="Acp Id"
                          readOnly
                          defaultValue={nameProdut ? nameProdut : "No data"}
                        />
                      </Form.Item>
                    </Col>
                    <Col
                      xs={{ span: 20 }}
                      sm={{ span: 20 }}
                      md={{ span: 8 }}
                      lg={{ span: 8 }}
                    >
                      <Text
                        strong
                        className="Tablet, Phone"
                        style={{ padding: "5px" }}
                      >
                        Categoria
                      </Text>
                      <Form.Item>
                        <Input
                          placeholder="Puntaje"
                          readOnly
                          defaultValue={category ? category : "No data"}
                        />
                      </Form.Item>
                    </Col>
                    <Col
                      xs={{ span: 20 }}
                      sm={{ span: 20 }}
                      md={{ span: 8 }}
                      lg={{ span: 8 }}
                    >
                      <Text
                        strong
                        className="Tablet, Phone"
                        style={{ padding: "5px" }}
                      >
                        hola
                      </Text>

                      <Form.Item>
                        <Input
                          placeholder="Puntaje"
                          readOnly
                          defaultValue={price ? price : "No data"}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  {/* <Row gutter={8}>
                    <Col
                      xs={{ span: 20 }}
                      sm={{ span: 20 }}
                      md={{ span: 8 }}
                      lg={{ span: 8 }}
                    >
                      <Text
                        strong
                        className="Tablet, Phone"
                        style={{ padding: "5px" }}
                      >
                        Nombre de receta
                      </Text>

                      <Form.Item>
                        <Input
                          placeholder="Acp Id"
                          readOnly
                          defaultValue={nameRecipes ? nameRecipes : "No data"}
                        />
                      </Form.Item>
                    </Col>
                    <Col
                      xs={{ span: 20 }}
                      sm={{ span: 20 }}
                      md={{ span: 8 }}
                      lg={{ span: 8 }}
                    >
                      <Text
                        strong
                        className="Tablet, Phone"
                        style={{ padding: "5px" }}
                      >
                        Categoria
                      </Text>
                      <Form.Item>
                        <Input
                          placeholder="Puntaje"
                          readOnly
                          defaultValue={category ? category : "No data"}
                        />
                      </Form.Item>
                    </Col>
                    <Col
                      xs={{ span: 20 }}
                      sm={{ span: 20 }}
                      md={{ span: 8 }}
                      lg={{ span: 8 }}
                    >
                      <Text
                        strong
                        className="Tablet, Phone"
                        style={{ padding: "5px" }}
                      >
                        hola
                      </Text>

                      <Form.Item>
                        <Input
                          placeholder="Puntaje"
                          readOnly
                          defaultValue={preTime ? preTime : "No data"}
                        />
                      </Form.Item>
                    </Col>
                  </Row> */}
                  {/* <Row gutter={8}>
                    <Col
                      xs={{ span: 20 }}
                      sm={{ span: 20 }}
                      md={{ span: 8 }}
                      lg={{ span: 8 }}
                    >
                      <Text
                        strong
                        className="Tablet, Phone"
                        style={{ padding: "5px" }}
                      >
                        Nombre de receta
                      </Text>

                      <Form.Item>
                        <Input
                          placeholder="Acp Id"
                          readOnly
                          defaultValue={nameRecipes ? nameRecipes : "No data"}
                        />
                      </Form.Item>
                    </Col>
                    <Col
                      xs={{ span: 20 }}
                      sm={{ span: 20 }}
                      md={{ span: 8 }}
                      lg={{ span: 8 }}
                    >
                      <Text
                        strong
                        className="Tablet, Phone"
                        style={{ padding: "5px" }}
                      >
                        Categoria
                      </Text>
                      <Form.Item>
                        <Input
                          placeholder="Puntaje"
                          readOnly
                          defaultValue={category ? category : "No data"}
                        />
                      </Form.Item>
                    </Col>
                    <Col
                      xs={{ span: 20 }}
                      sm={{ span: 20 }}
                      md={{ span: 8 }}
                      lg={{ span: 8 }}
                    >
                      <Text
                        strong
                        className="Tablet, Phone"
                        style={{ padding: "5px" }}
                      >
                        hola
                      </Text>

                      <Form.Item>
                        <Input
                          placeholder="Puntaje"
                          readOnly
                          defaultValue={preTime ? preTime : "No data"}
                        />
                      </Form.Item>
                    </Col>
                  </Row> */}
                </Form>
                <Button type="primary" danger onClick={handleDelete}>
                  Primary
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </Main>
  );
}

export default DetailsProducts;
