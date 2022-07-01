import { Button, Col, Form, Input, Row, Select, Spin, Upload } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../redux/action/productosActions";
import Main from "../components/layout/Main";
const { TextArea } = Input;
const { Option } = Select;

function Products() {
  const [imgBase64, setBase64] = useState({ base64: [] });
  const dispatch = useDispatch();
  const onFinish = (values) => {
    const payload = {
      nameProdut: values.nameProdut,
      imagesList: imgBase64.base64,
      descriptionProduct: values.descriptionProduct,
      category: values.category,
      price: values.price,
    };
    dispatch(createProduct(payload));
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
      <Row gutter={16}>
        <Col xxl={12} xs={24}>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Nombre del producto"
              name="nameProdut"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="category"
              label="Categoria"
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
              >
                <Option value="Desayuno">Desayuno</Option>
                <Option value="Bebida">Bebida</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Precio"
              name="price"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Imagenes"
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
                <Button>Subir archivo</Button>
              </Upload.Dragger>
            </Form.Item>
            <Form.Item
              label="descripcion"
              name="descriptionProduct"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item label="Button">
              <Button type="primary" htmlType="submit">
                Enviar
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Main>
  );
}

export default Products;
