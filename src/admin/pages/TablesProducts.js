import { Row, Col, Card, Table, Button, Avatar, Typography } from "antd";
import React, { useEffect } from "react";

// Images
import Main from "../components/layout/Main";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listProducts } from "../../redux/action/productosActions";

// table code start
const columns = [
  {
    title: "NOMBRE",
    dataIndex: "nameProdut",
    key: "nameProdut",
    width: "32%",
  },
  {
    title: "CATEGORIA",
    dataIndex: "category",
    key: "category",
  },

  {
    title: "FECHA",
    key: "updatedAt",
    dataIndex: "updatedAt",
  },
  {
    title: "PRECIO",
    key: "price",
    dataIndex: "price",
  },
  {
    title: "ACCION",
    key: "_id",
    dataIndex: "_id",
  },
];
const { Title } = Typography;
function TableProducts() {
  const dispatch = useDispatch();
  const listarProducts = useSelector(
    (state) => state.productos.listProducts.products
  );
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  let dataTables = [];
  listarProducts?.map((item, index) =>
    dataTables.push({
      key: `${index}`,
      nameProdut: (
        <>
          <Avatar.Group>
            <Avatar
              className="shape-avatar"
              shape="square"
              size={40}
              src={item.imagesList[0]}
            ></Avatar>
            <div className="avatar-info">
              <Title level={5}>{item.nameProdut}</Title>
            </div>
          </Avatar.Group>
        </>
      ),
      category: (
        <>
          <div className="author-info">
            <Title level={5}>{item.category}</Title>
          </div>
        </>
      ),

      updatedAt: (
        <>
          <div className="author-info">
            <Title level={5}>{item.updatedAt}</Title>
          </div>
        </>
      ),
      price: (
        <>
          <div className="author-info">
            <Title level={5}>{item.price}</Title>
          </div>
        </>
      ),
      _id: (
        <>
          <div className="ant-employed">
            <Button>
              <Link to={`/admin/products/${item._id}`}>Detalles</Link>
            </Button>
          </div>
        </>
      ),
    })
  );
  return (
    <Main>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Lista de productos"
            >
              <div className="table-responsive">
                <Table
                  columns={columns}
                  dataSource={dataTables}
                  pagination={false}
                  className="ant-border-space"
                />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </Main>
  );
}

export default TableProducts;
