import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Steps, Layout, Col, Row } from "antd";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { saveShippingAddress } from "../redux/action/cartActions";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import FooterComponent from "../components/FooterComponent";
const { Content } = Layout;

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate("/payment");
  };

  return (
    <Layout className="layout__Main">
      <Header />
      <Content>
        <FormContainer>
          <CheckoutSteps step1 step2 />
          <h1>Envío</h1>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="address">
              <Form.Label>Direccion</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                value={address}
                required
                onChange={(e) => setAddress(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="city">
              <Form.Label>Provincia</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                value={city}
                required
                onChange={(e) => setCity(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="postalCode">
              <Form.Label>Codigo postal</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter postal code"
                value={postalCode}
                required
                onChange={(e) => setPostalCode(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="country">
              <Form.Label>Barrio</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter country"
                value={country}
                required
                onChange={(e) => setCountry(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary"
            style={{marginTop: 10}}>
              Continuar
            </Button>
          </Form>
        </FormContainer>
      </Content>
      <FooterComponent />
    </Layout>
  );
};

export default ShippingScreen;
