import {
  Row,
  Col,
  Card,
  Radio,
  Table,
} from "antd";
import React, { useEffect } from "react";

// Images
import Main from "../components/layout/Main";
import { useDispatch, useSelector } from "react-redux";
import { listRecipes } from "../../redux/action/recipesAction";

// table code start
const columns = [
  {
    title: "AUTHOR",
    dataIndex: "image",
    key: "image",
    width: "32%",
  },
  {
    title: "FUNCTION",
    dataIndex: "nameRecipes",
    key: "nameRecipes",
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
];


function Tables() {
  const onChange = (e) => console.log(`radio checked:${e.target.value}`);
  const dispatch = useDispatch();
  const listarRecetas = useSelector(
    (state) => state.recipes.listRecipes.recipes
  );
  useEffect(() => {
    dispatch(listRecipes());
  }, [dispatch]);
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
                  dataSource={listarRecetas}
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
