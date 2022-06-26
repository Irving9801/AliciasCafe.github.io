import { Layout, Row, Col } from "antd";
import React from "react";
function Footer() {
  const { Footer: AntFooter } = Layout;

  return (
    <AntFooter style={{ background: "#fafafa" }}>
      <Row className="just">
        <Col xs={24} md={12} lg={12}>
         
        </Col>
      </Row>
    </AntFooter>
  );
}

export default Footer;
