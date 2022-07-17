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
import { toast } from "react-toastify";
import {
  deleteRecipes,
  getRecipesById,
} from "../../../redux/action/recipesAction";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
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
function DetailsRecipes() {
  let params = window.location.pathname.slice(15);
  const dispatch = useDispatch();
  const [editForm, setEditForm] = useState(false);

  const {
    nameRecipes,
    category,
    serving,
    descriptionRecipes,
    cookTime,
    Ingredientes,
    preTime,
    Instruccion,
  } = useSelector((state) => state.recipes.listById);
  const { deleteLoadProd } = useSelector((state) => state.productos);
  const [imgBase64, setBase64] = useState({ base64: [] });
  useEffect(() => {
    dispatch(getRecipesById(params));
  }, [dispatch]);
  const handleDelete = () => {
    dispatch(deleteRecipes(params));
  };
  const onFinish = (values) => {
    console.log(imgBase64.base64.length > 0);
    if (imgBase64.base64.length > 0) {
      const payload = {
        nameRecipes: values.nameRecipes,
        image: imgBase64.base64,
        descriptionRecipes: values.descriptionRecipes,
        category: values.category,
        serving: values.serving,
        cookTime: values.cookTime,
        preTime: values.preTime,
        Ingredientes: values.Ingredientes,
        Instruccion: values.Instruccion,
      };
      dispatch(updateProducto(payload, params));
    } else {
      toast.info("Debes agregar una imagen");
    }
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
      {nameRecipes ? (
        <div className="tabled">
          <Row gutter={[24, 0]}>
            <Col xs="24" xl={24}>
              <Card
                bordered={false}
                className="criclebox tablespace mb-24"
                title="Detalles de recetas"
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
                      nameRecipes: nameRecipes,
                      serving: serving,
                      category: category,
                      descriptionRecipes: descriptionRecipes,
                      cookTime: cookTime,
                      preTime: preTime,
                      Ingredientes: Ingredientes,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Row gutter={8}>
                      <Col xs={24} sm={{ span: 20 }} md={{ span: 8 }} lg={12}>
                        <TitleInput titleIn="Nombre" />
                        <Form.Item
                          name="nameRecipes"
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
                              message: "Seleccione una categoria!",
                            },
                          ]}
                        >
                          <Select
                            placeholder="Seleccione un opción"
                            defaultValue={category}
                            allowClear
                            readOnly={!editForm}
                          >
                            <Option value="Desayuno">Desayuno</Option>
                            <Option value="Bebida">Bebida</Option>
                            <Option value="other">Otros</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={8}>
                      <Col xs={24} sm={{ span: 20 }} md={{ span: 8 }} lg={12}>
                        <TitleInput titleIn="Para:" />
                        <Form.Item
                          name="serving"
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
                          name="descriptionRecipes"
                          rules={[
                            {
                              required: true,
                              message: "Porfavor digite un precio!",
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
                            required={true}
                            showUploadList={{ showRemoveIcon: true }}
                            accept=".png,.jpeg,.png"
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
                        <TitleInput titleIn="Tiempo de cocción" />
                        <Form.Item
                          name="cookTime"
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
                    <Row gutter={8}>
                      <Col xs={24} sm={{ span: 20 }} md={{ span: 8 }} lg={12}>
                        <TitleInput titleIn="Tiempo de preparación" />
                        <Form.Item
                          name="preTime"
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
                        <pre className="language-bash">
                          {JSON.stringify(Instruccion, null, 2)}
                        </pre>
                        <Form.List
                          name="Instruccion"
                          rules={[
                            {
                              validator: async (_, names) => {
                                if (!names || names.length < 1) {
                                  return Promise.reject(
                                    new Error("Agregar 2 campos mínimo")
                                  );
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
                      </Col>
                    </Row>
                    <Row gutter={8}>
                      <Col xs={24} sm={{ span: 20 }} md={{ span: 8 }} lg={12}>
                        <pre className="language-bash">
                          {JSON.stringify(Ingredientes, null, 2)}
                        </pre>
                        <Form.List
                          name="ingredientes"
                          rules={[
                            {
                              validator: async (_, names) => {
                                if (!names || names.length < 1) {
                                  return Promise.reject(
                                    new Error("Agregar 2 campos mínimo")
                                  );
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
                        <Button
                          type="primary"
                          danger
                          onClick={handleDelete}
                          style={{ marginRight: 40 }}
                        >
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
        ""
      )}
    </Main>
  );
}

export default DetailsRecipes;
