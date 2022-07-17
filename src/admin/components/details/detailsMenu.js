import { Row, Col, Card, Input, Form, Button, Upload, Spin } from "antd";
import React, { useEffect, useState } from "react";
import TitleInput from "./../TitleInput/Title";
// Images
import Main from "../layout/Main";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteMenu,
  deleteRecipes,
  updateMenu,
} from "../../../redux/action/recipesAction";
import { getMenuById } from "../../../redux/action/productosActions";
const { TextArea } = Input;
function DetailsMenu(props) {
  const [editForm, setEditForm] = useState(false);
  const [imgBase64, setBase64] = useState("");
  let params = window.location.pathname.slice(12);
  const dispatch = useDispatch();
  const { name, price, brand, category, description, image } = useSelector(
    (state) => state.productos.getMenuById
  );
  useEffect(() => {
    dispatch(getMenuById(params));
  }, [dispatch]);
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => resolve(setBase64(reader.result));
      reader.onerror = (error) => reject(error);
    });
  const handleDelete = () => {
    dispatch(deleteMenu(params));
  };
  const onFinish = (values) => {
    if (imgBase64) {
      const payload = {
        name: values.name,
        image: imgBase64,
        description: values.description,
        brand: "frape",
        category: values.category,
        price: values.price,
      };
      dispatch(updateMenu(payload, params));
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Main>
      {name ? (
        <div className="tabled">
          <Row gutter={[24, 0]}>
            <Col xs="24" xl={24}>
              <Card
                bordered={false}
                className="criclebox tablespace mb-24"
                title="Detalle de menu"
              >
                <div className="table-responsive">
                  <Form
                    style={{ padding: "2rem 5rem" }}
                    name="basic"
                    labelCol={{
                      span: 8,
                    }}
                    wrapperCol={{
                      span: 16,
                    }}
                    initialValues={{
                      name: name,
                      price: price,
                      brand: brand,
                      category: category,
                      description: description,
                      image: image,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Row gutter={8}>
                      <Col xs={24} sm={{ span: 20 }} md={{ span: 8 }} lg={12}>
                        <TitleInput titleIn="Nombre" />
                        <Form.Item
                          name="name"
                          initialValues
                          rules={[
                            {
                              required: true,
                              message: "Please input your username!",
                            },
                          ]}
                        >
                          <Input placeholder="Cedula" readOnly={!editForm} />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={{ span: 20 }} md={{ span: 8 }} lg={12}>
                        <TitleInput titleIn="Marca" />
                        <Form.Item
                          name="brand"
                          rules={[
                            {
                              required: true,
                              message: "Please input your username!",
                            },
                          ]}
                        >
                          <Input
                            placeholder="Primer nombre"
                            readOnly={!editForm}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={8}>
                      <Col xs={24} sm={{ span: 20 }} md={{ span: 8 }} lg={12}>
                        <TitleInput titleIn="Categoria" />
                        <Form.Item
                          name="category"
                          rules={[
                            {
                              required: true,
                              message: "Please input your username!",
                            },
                          ]}
                        >
                          <Input placeholder="Categoria" readOnly={!editForm} />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={{ span: 20 }} md={{ span: 8 }} lg={12}>
                        <TitleInput titleIn="Descripcion" />
                        <Form.Item
                          name="description"
                          rules={[
                            {
                              required: true,
                              message: "Please input your username!",
                            },
                          ]}
                        >
                          <TextArea
                            rows={4}
                            placeholder="Descripcion"
                            readOnly={!editForm}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={8}>
                      <Col xs={24} sm={{ span: 20 }} md={{ span: 8 }} lg={12}>
                        <TitleInput titleIn="Precio" />
                        <Form.Item
                          name="price"
                          rules={[
                            {
                              required: true,
                              message: "Please input your username!",
                            },
                          ]}
                        >
                          <Input placeholder="Precio" readOnly={!editForm} />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={{ span: 20 }} md={{ span: 8 }} lg={12}>
                        <TitleInput titleIn="Imagen" />
                        <Form.Item
                          rules={[
                            {
                              required: true,
                              message: "Please input your username!",
                            },
                          ]}
                        >
                          <Upload.Dragger
                            listType="picture"
                            showUploadList={{ showRemoveIcon: true }}
                            accept=".png,.jpeg,.jpg"
                            beforeUpload={(file) => {
                              getBase64(file);
                              return false;
                            }}
                            iconRender={() => {
                              return <Spin></Spin>;
                            }}
                            progress={{
                              strokeWidth: 3,
                              strokeColor: {
                                "0%": "#f0f",
                                "100%": "#ff0",
                              },
                            }}
                          >
                            <Button>Upload</Button>
                          </Upload.Dragger>
                        </Form.Item>
                      </Col>
                    </Row>
                  
                    <Row gutter={8}>
                      <Col
                        xs={24}
                        sm={{ span: 20 }}
                        md={{ span: 8 }}
                        lg={12}
                      ></Col>
                      <Col
                        xs={24}
                        sm={{ span: 20 }}
                        md={{ span: 8 }}
                        lg={12}
                        style={{
                          justifyContent: "start",
                          display: "flex",
                        }}
                      >
                      <Button type="primary" danger style={{ marginRight: 40 }} onClick={handleDelete}>
                        Eliminar menu
                      </Button>
                    
                      {editForm === false ? (
                        <Button
                          type="secondary"
                          danger
                          onClick={() => setEditForm(true)}
                        >
                          Editar
                        </Button>
                      ) : (
                        <Button
                          type="secondary"
                          htmlType="submit"
                          onClick={() => setEditForm(true)}
                        >
                          Guardar
                        </Button>
                      )}
                      </Col>
                      </Row>
                    
                  </Form>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      ) : (
        "No data"
      )}
    </Main>
  );
}

export default DetailsMenu;
