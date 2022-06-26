import { Row, Col, Card, Table, Button, Avatar, Typography } from "antd";
import React, { useEffect } from "react";

// Images
import Main from "../components/layout/Main";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listMenu } from "../../redux/action/productosActions";

// table code start
const columns = [
  {
    title: "AUTHOR",
    dataIndex: "name",
    key: "name",
    width: "32%",
  },
  {
    title: "CATEGORIA",
    dataIndex: "category",
    key: "category",
  },

  {
    title: "STATUS",
    key: "category",
    dataIndex: "category",
  },
  {
    title: "EMPLOYED",
    key: "createdAt",
    dataIndex: "createdAt",
  },
  {
    title: "Action",
    key: "_id",
    dataIndex: "_id",
  },
];
const { Title } = Typography;
function TablesMenu() {
  const dispatch = useDispatch();
  const listarMenu = useSelector((state) => state.productos.listMenu.products);
  useEffect(() => {
    dispatch(listMenu());
  }, [dispatch]);
  let dataTables = [];
  listarMenu?.map((item, index) =>
    dataTables.push({
      key: `${index}`,
      name: (
        <>
          <Avatar.Group>
            <Avatar
              className="shape-avatar"
              shape="square"
              size={40}
              src={item.image}
            ></Avatar>
            <div className="avatar-info">
              <Title level={5}>{item.name}</Title>
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

      status: (
        <>
          <Button type="primary" className="tag-primary">
            ONLINE
          </Button>
        </>
      ),
      employed: (
        <>
          <div className="ant-employed">
            <span>23/04/18</span>
            <a href="#pablo">Edit</a>
          </div>
        </>
      ),
      _id: (
        <>
          <div className="ant-employed">
            <Button>
              <Link to={`/admin/menu/${item._id}`}>Detalles</Link>
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
              title="Lista de recetas"
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

export default TablesMenu;
