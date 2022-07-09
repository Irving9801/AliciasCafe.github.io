import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { savePaymentMethod } from "../redux/action/cartActions";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import FooterComponent from "../components/FooterComponent";
import { Layout } from "antd";
const { Content } = Layout;
const PaymentScreen = ({ history }) => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress.address) {
    navigate("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };

  return (
    <Layout className="layout__Main">
      <Header />
      <Content>
        <FormContainer>
          <CheckoutSteps step1 step2 step3 />
          <h1>Método de pago</h1>
          <Form onSubmit={submitHandler}>
            <Form.Group>
              <Form.Label as="legend">Seleccionar método</Form.Label>
              <Col>
                <Form.Check
                  type="radio"
                  label="PayPal o tarjeta de crédito"
                  id="PayPal"
                  name="paymentMethod"
                  value="PayPal"
                  checked
                  onChange={(e) => setPaymentMethod(e.target.value)}
                ></Form.Check>
              </Col>
            </Form.Group>

            <Button type="submit" variant="primary" style={{ marginTop: 20 }}>
              Continuar
            </Button>
          </Form>
        </FormContainer>
      </Content>
      <FooterComponent />
    </Layout>
  );
};

export default PaymentScreen;
