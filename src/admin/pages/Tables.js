import { Row, Col, Card, Table, Button, Avatar, Typography } from "antd";
import React, { useEffect } from "react";
import Main from "../components/layout/Main";
import { useDispatch, useSelector } from "react-redux";
import { listRecipes } from "../../redux/action/recipesAction";
import { Link } from "react-router-dom";

// table code start
const columns = [
  {
    title: "NOMBRE",
    dataIndex: "image",
    key: "image",
    width: "32%",
  },
  {
    title: "CATEGORIA",
    key: "category",
    dataIndex: "category",
  },
  {
    title: "ACCION",
    key: "_id",
    dataIndex: "_id",
  },
];
const { Title } = Typography;
function Tables() {
  const dispatch = useDispatch();
  const listarRecetas = useSelector(
    (state) => state.recipes.listRecipes.recipes
  );
  useEffect(() => {
    dispatch(listRecipes());
  }, [dispatch]);

  let dataTables = [];
  listarRecetas?.map((item, index) =>
    dataTables.push({
      key: `${index}`,
      image: (
        <>
          <Avatar.Group>
            <Avatar
              className="shape-avatar"
              shape="square"
              size={40}
              src={item.image}
            ></Avatar>
            <div className="avatar-info">
              <Title level={5}>{item.nameRecipes}</Title>
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
              <Link to={`/admin/details/${item._id}`}>Detalles</Link>
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

export default Tables;
