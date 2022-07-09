import React, { Component } from "react";
import { Typography } from "antd";
import "./TitleStyle.css";

class TitleInput extends Component {
  render() {
    const { Text } = Typography;
    const { titleIn, secondInput } = this.props;
    return (
      <div>
        <Text strong className="Tablet, Phone" style={{ padding: "5px" }}>
          {titleIn}
        </Text>
        <Text type="secondary">{secondInput}</Text>
      </div>
    );
  }
}

export default TitleInput;
