import { Row, Col, Card, Input, Form, Typography, Button } from "antd";
import React, { useEffect } from "react";

// Images
import Main from "../../components/layout/Main";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteRecipes,
  getRecipesById,
} from "../../../redux/action/recipesAction";

function DetailsRecipes() {
  let params = window.location.pathname.slice(15);
  const dispatch = useDispatch();
  const { nameRecipes, category, preTime } = useSelector(
    (state) => state.recipes.listById
  );
  const list = useSelector(
    (state) => state.recipes.listById
  );
  useEffect(() => {
    dispatch(getRecipesById(params));
  }, [dispatch]);
  const { Text } = Typography;
  const handleDelete = () => {
    dispatch(deleteRecipes(params));
  };
  console.log(list,"AAAAAAA")
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
                <Form style={{ padding: "20px" }}>
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
                  </Row>
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
                  </Row>
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
                  </Row>
                </Form>
                <Button type="primary" danger onClick={handleDelete}>
                  Primary
                </Button>
                <Button type="secondary" danger onClick={handleDelete}>
                  Editar
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </Main>
  );
}

export default DetailsRecipes;
