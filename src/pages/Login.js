import React, { useEffect, useState } from "react";
import "../assets/css/pages/login.css";
import { Layout, Button, Input, Form } from "antd";
import { login, register } from "../redux/action/userActions";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const { Content } = Layout;
const Login = () => {
  const [visible, setVisible] = useState(false);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(login(values.username, values.password));
  };
  const loginData = useSelector((state) => state.login.userInfo);
  const url = window.location.search
    ? window.location.search.split("=")[1]
    : null;
  useEffect(() => {
    if (loginData?.isAdmin === true) {
      navigate("/admin/dashboard");
    } else if (url !== null && loginData) {
      navigate("/shipping");
    }
  }, [loginData]);

  const onFinishRegister = (values) => {
    dispatch(register(values.FullName, values.username, values.password));
  };
  const screenSup = () => {
    setVisible(true);
  };
  const handleClick = () => {
    setVisible(false);
  };
  return (
    <Layout className="layout__Main">
      <Content id="login">
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 col-lg-10">
                <div className="wrap d-md-flex">
                  <div className="img"></div>
                  <div className="login-wrap p-4 p-md-5">
                    {visible === false ? (
                      <>
                        <div className="d-flex">
                          <div className="w-100">
                            <h3 className="mb-4">Iniciar sesión</h3>
                          </div>
                          <div className="w-100">
                            <p className="social-media d-flex justify-content-end">
                              <a
                                href="#"
                                className="social-icon d-flex align-items-center justify-content-center"
                              >
                                <span className="fa fa-facebook"></span>
                              </a>
                              <a
                                href="#"
                                className="social-icon d-flex align-items-center justify-content-center"
                              >
                                <span className="fa fa-twitter"></span>
                              </a>
                            </p>
                          </div>
                        </div>
                        <Form
                          name="basic"
                          initialValues={{
                            remember: true,
                          }}
                          onFinish={onFinish}
                          autoComplete="off"
                          class="signin-form"
                        >
                          <div className="form-group mb-3">
                            <Form.Item
                              label="Username"
                              name="username"
                              className="label"
                              style={{ display: "block" }}
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your username!",
                                },
                              ]}
                            >
                              <Input className="form-control" />
                            </Form.Item>
                          </div>
                          <div className="form-group mb-3">
                            <Form.Item
                              label="Password"
                              name="password"
                              className="label"
                              style={{ display: "block" }}
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your password!",
                                },
                              ]}
                            >
                              <Input.Password className="form-control" />
                            </Form.Item>
                          </div>
                          <Form.Item>
                            <div className="form-group">
                              <Button
                                htmlType="submit"
                                className="form-control btn btn-primary rounded submit px-3"
                              >
                                Iniciar sesión
                              </Button>
                            </div>
                          </Form.Item>

                          <p className="text-center">
                            <a data-toggle="tab" onClick={screenSup}>
                              ¿No tiene cuenta?
                            </a>
                          </p>
                        </Form>
                      </>
                    ) : (
                      <>
                        <div className="d-flex">
                          <div className="w-100">
                            <h3 className="mb-4">Registrarse</h3>
                          </div>
                          <div className="w-100">
                            <p className="social-media d-flex justify-content-end">
                              <a
                                href="#"
                                className="social-icon d-flex align-items-center justify-content-center"
                              >
                                <span className="fa fa-facebook"></span>
                              </a>
                              <a
                                href="#"
                                className="social-icon d-flex align-items-center justify-content-center"
                              >
                                <span className="fa fa-twitter"></span>
                              </a>
                            </p>
                          </div>
                        </div>
                        <Form
                          name="basic"
                          initialValues={{
                            remember: true,
                          }}
                          onFinish={onFinishRegister}
                          autoComplete="off"
                          className="formFields"
                        >
                          <div className="form-group mb-3">
                            <Form.Item
                              name="FullName"
                              label="Nombre completo"
                              className="label"
                              style={{ display: "block" }}
                              rules={[{ required: true }]}
                            >
                              <Input className="form-control" />
                            </Form.Item>
                          </div>
                          <div className="form-group mb-3">
                            <Form.Item
                              label="Correo electrónico"
                              name="username"
                              style={{ display: "block" }}
                              className="label"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your username!",
                                },
                              ]}
                            >
                              <Input className="form-control" />
                            </Form.Item>
                          </div>
                          <div className="form-group mb-3">
                            <Form.Item
                              label="Contraseña"
                              name="password"
                              className="label"
                              style={{ display: "block" }}
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your password!",
                                },
                              ]}
                            >
                              <Input.Password className="form-control" />
                            </Form.Item>
                          </div>
                          <Form.Item>
                            <div className="form-group">
                              <Button
                                htmlType="submit"
                                className="form-control btn btn-primary rounded submit px-3"
                              >
                                Registrarse
                              </Button>
                            </div>
                          </Form.Item>
                          <p className="text-center">
                            <a data-toggle="tab" onClick={handleClick}>
                              ¿Ya tienes una cuenta?
                            </a>
                          </p>
                        </Form>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Content>
    </Layout>
  );
};

export default Login;
