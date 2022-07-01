import { Row, Col, Card, Input, Form, Typography, Button } from "antd";
import React, { useEffect } from "react";

// Images
import Main from "../layout/Main";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteRecipes,
} from "../../../redux/action/recipesAction";
import { getMenuById } from "../../../redux/action/productosActions";

function DetailsMenu() {
  let params = window.location.pathname.slice(12);
  const dispatch = useDispatch();
  // const listarRecetas = useSelector(
  //   (state) => state.recipes.listRecipes.recipes
  // );
  useEffect(() => {
    dispatch(getMenuById(params));
  }, [dispatch]);
  const { Text } = Typography;
  const handleDelete = () => {
    dispatch(deleteRecipes(params));
  };
  return (
    <Main>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Detalle de recetas"
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
                        hola
                      </Text>

                      <Form.Item>
                        <Input
                          placeholder="Acp Id"
                          readOnly
                          defaultValue={"No data"}
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
                          defaultValue={"No data"}
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

                      <Form.Item></Form.Item>
                    </Col>
                  </Row>
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

export default DetailsMenu;
