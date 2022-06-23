import { Button, DatePicker, Form, Input, Select } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createMenu } from "../../redux/action/productosActions";
import Main from "../components/layout/Main";
const { TextArea } = Input;
const { Option } = Select;

function Home() {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    const payload = {
      name: values.name,
      image: "/images/airpods.jpg",
      description: values.description,
      brand: "frape",
      category: values.category,
      price: values.price,
    };
    dispatch(createMenu(payload));
  };
  return (
    <Main>
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
        label="name"
        name="name"
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
        label="descripcion"
        name="description"
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
          Submit
        </Button>
      </Form.Item>
    </Form>
    </Main>
  );
}

export default Home;
