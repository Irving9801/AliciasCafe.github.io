import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Select, Spin, Upload } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createRecipe } from "../../redux/action/recipesAction";
import Main from "../components/layout/Main";
const { TextArea } = Input;
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 4,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 20,
    },
  },
};
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 20,
      offset: 4,
    },
  },
};
function Recipes() {
  const [imgBase64, setBase64] = useState("");
  const dispatch = useDispatch();
  const onFinish = (values) => {
    const payload = {
      nameRecipes: values.nameRecipes,
      image: imgBase64,
      descriptionRecipes: values.descriptionRecipes,
      category: values.category,
      serving: values.serving,
      cookTime: values.cookTime,
      preTime: values.preTime,
      Ingredientes: values.ingredientes,
      Instruccion: values.Instruccion,
    };
    dispatch(createRecipe(payload));
  };
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => resolve(setBase64(reader.result));
      reader.onerror = (error) => reject(error);
    });

  return (
    <Main>
      <Row gutter={16}>
        <Col xxl={12} xs={24} xl={16}>
          <Form
            // name="basic"
            name="dynamic_form_item"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            {...formItemLayoutWithOutLabel}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Nombre"
              name="nameRecipes"
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
                placeholder="Selecciona una opcion"
                // onChange={onGenderChange}
                allowClear
              >
                <Option value="Desayuno">Desayuno</Option>
                <Option value="Bebida">Bebida</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Tiempo de preparacion"
              name="preTime"
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
              label="Porcion para"
              name="serving"
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
              label="Tiempo de cocción"
              name="cookTime"
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
              label="Imagen"
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
                accept=".png,.jpeg,.png"
                multiple={true}
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

            <Form.List
              name="ingredientes"
              rules={[
                {
                  validator: async (_, names) => {
                    if (!names || names.length < 1) {
                      return Promise.reject(new Error("At least 2 passengers"));
                    }
                  },
                },
              ]}
            >
              {(fields, { add, remove }, { errors }) => (
                <>
                  {fields.map((field, index) => (
                    <Form.Item
                      {...(index === 0
                        ? formItemLayout
                        : formItemLayoutWithOutLabel)}
                      label={index === 0 ? "Ingredientes" : ""}
                      required={false}
                      key={index}
                    >
                      <Form.Item
                        {...field}
                        validateTrigger={["onChange", "onBlur"]}
                        rules={[
                          {
                            required: true,
                            whitespace: true,
                            message:
                              "Please input passenger's name or delete this field.",
                          },
                        ]}
                        noStyle
                      >
                        <Input
                          placeholder="Agregar ingrediente"
                          style={{
                            width: "60%",
                          }}
                        />
                      </Form.Item>
                      {fields.length > 1 ? (
                        <MinusCircleOutlined
                          className="dynamic-delete-button"
                          onClick={() => remove(field.name)}
                        />
                      ) : null}
                    </Form.Item>
                  ))}
                  <Form.Item label="Ingredientes">
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      style={{
                        width: "60%",
                      }}
                      icon={<PlusOutlined />}
                    >
                      Agregar Ingrediente
                    </Button>
                    <Form.ErrorList errors={errors} />
                  </Form.Item>
                </>
              )}
            </Form.List>

            <Form.Item
              label="descripcion"
              name="descriptionRecipes"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <TextArea rows={4} />
            </Form.Item>
            <Form.List
              name="Instruccion"
              rules={[
                {
                  validator: async (_, names) => {
                    if (!names || names.length < 1) {
                      return Promise.reject(new Error("At least 2 passengers"));
                    }
                  },
                },
              ]}
            >
              {(fields, { add, remove }, { errors }) => (
                <>
                  {fields.map((field, index) => (
                    <Form.Item
                      {...(index === 0
                        ? formItemLayout
                        : formItemLayoutWithOutLabel)}
                      label={index === 0 ? "Instrucciones" : ""}
                      required={false}
                      key={index}
                    >
                      <Form.Item
                        {...field}
                        validateTrigger={["onChange", "onBlur"]}
                        rules={[
                          {
                            required: true,
                            whitespace: true,
                            message:
                              "Please input passenger's name or delete this field.",
                          },
                        ]}
                        noStyle
                      >
                        <Input
                          style={{
                            width: "60%",
                          }}
                        />
                      </Form.Item>
                      {fields.length > 1 ? (
                        <MinusCircleOutlined
                          className="dynamic-delete-button"
                          onClick={() => remove(field.name)}
                        />
                      ) : null}
                    </Form.Item>
                  ))}
                  <Form.Item label="Instrucciones">
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      style={{
                        width: "60%",
                      }}
                      icon={<PlusOutlined />}
                    >
                      Agregar Instruccion
                    </Button>
                    <Form.ErrorList errors={errors} />
                  </Form.Item>
                </>
              )}
            </Form.List>
            <Form.Item label=".">
              <Button type="primary" htmlType="submit">
                Crear receta
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Main>
  );
}

export default Recipes;
