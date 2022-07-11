import {
  Row,
  Col,
  Card,
  Input,
  Form,
  Spin,
  Button,
  Upload,
  Select,
} from "antd";
import React, { useEffect, useState } from "react";
import Main from "../../components/layout/Main";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getProductsById,
  updateProducto,
} from "../../../redux/action/productosActions";
import TitleInput from "./../TitleInput/Title";
const { TextArea } = Input;
const { Option } = Select;
function DetailsProducts() {
  let params = window.location.pathname.slice(16);
  const dispatch = useDispatch();
  const [editForm, setEditForm] = useState(false);
  const [imgBase64, setBase64] = useState({ base64: [] });
  const { nameProdut, category, price, descriptionProduct,countInStock } = useSelector(
    (state) => state.productos.listProById
  );
  const { deleteLoadProd } = useSelector((state) => state.productos);
  useEffect(() => {
    dispatch(getProductsById(params));
  }, [dispatch]);
  const handleDelete = () => {
    dispatch(deleteProduct(params));
  };
  const onFinish = (values) => {
    const payload = {
      nameProdut: values.nameProdut,
      imagesList: imgBase64.base64,
      descriptionProduct: values.descriptionProduct,
      category: values.category,
      price: values.price,
      countInStock: values.countInStock,
    };
    dispatch(updateProducto(payload, params));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const _decodes = (e) => {
    const { base64 } = imgBase64;
    let newArray = [e];
    base64.push(newArray);
    setBase64({
      ...imgBase64,
      base64,
    });
  };
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => resolve(_decodes(reader.result));
      reader.onerror = (error) => reject(error);
    });
  return (
    <Main>
      {nameProdut ? (
        <div className="tabled">
          <Row gutter={[24, 0]}>
            <Col xs="24" xl={24}>
              <Card
                bordered={false}
                className="criclebox tablespace mb-24"
                title="Detalles de producto"
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
                      nameProdut: nameProdut,
                      price: price,
                      category: category,
                      descriptionProduct: descriptionProduct,
                      countInStock: countInStock,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Row gutter={8}>
                      <Col xs={24} sm={{ span: 20 }} md={{ span: 8 }} lg={12}>
                        <TitleInput titleIn="Nombre" />
                        <Form.Item
                          name="nameProdut"
                          rules={[
                            {
                              required: true,
                              message: "Please input your username!",
                            },
                          ]}
                        >
                          <Input readOnly={!editForm} />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={{ span: 20 }} md={{ span: 8 }} lg={12}>
                        <TitleInput titleIn="Categoria" />
                        <Form.Item
                          name="category"
                          rules={[
                            {
                              required: true,
                              message: "Please input your password!",
                            },
                          ]}
                        >
                          <Select
                            placeholder="Select a option and change input text above"
                            // onChange={onGenderChange}
                            allowClear
                            readOnly={!editForm}
                          >
                            <Option value="Desayuno">Desayuno</Option>
                            <Option value="Bebida">Bebida</Option>
                            <Option value="other">other</Option>
                          </Select>
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
                          <Input readOnly={!editForm} />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={{ span: 20 }} md={{ span: 8 }} lg={12}>
                        <TitleInput titleIn="Descripcion" />
                        <Form.Item
                          name="descriptionProduct"
                          rules={[
                            {
                              required: true,
                              message: "Please input your password!",
                            },
                          ]}
                        >
                          <TextArea rows={4} readOnly={!editForm} />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={8}>
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
                            accept=".png,.jpeg"
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
                      <Col xs={24} sm={{ span: 20 }} md={{ span: 8 }} lg={12}>
                        <TitleInput titleIn="Cantidad" />
                        <Form.Item
                          name="countInStock"
                          rules={[
                            {
                              required: true,
                              message: "Please input your username!",
                            },
                          ]}
                        >
                          <Input readOnly={!editForm} />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Form.Item
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                      style={{display: 'flex', width: '100%',}}
                    >
                      <Button type="primary" danger onClick={handleDelete}>
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
                    </Form.Item>
                  </Form>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      ) : (
        ""
      )}
    </Main>
  );
}

export default DetailsProducts;
