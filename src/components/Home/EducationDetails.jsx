import React, { useState } from "react";
import { Card, Layout, Menu } from "antd";
import { connect } from "react-redux";

const { Content, Sider } = Layout;

const EducationDetails = ({ studentData }) => {
  const [selectedData, setSelectedData] = useState([]);

  const onTeamClick = (data) => {
    setSelectedData(data);
  };

  return (
    <>
      <Layout style={{ height: "70vh", marginTop: "5px" }}>
        <Layout>
          <Sider style={{ padding: "25px", color: "white" }}>
            <Menu theme="dark" defaultSelectedKeys={["1"]}>
              {studentData.education.sort().reverse().map((item) => (
                <Menu.Item onClick={() => onTeamClick(item)} key={item.id}>
                  <span>{item.collegeName}</span>
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
          {selectedData ?
          <Content style={{ padding: "25px" }}>
            {studentData.education.map((item, i) => (
              <Card
                key={i}
                style={{ backgroundColor: "lightgray", marginTop: "5px" }}
              >
                <h2>
                  Graduate {item.courseName} @ {item.collegeName}
                </h2>
                  {item.sessionTime.map((time, index) => (
                    <span key={index} style={{padding:"5px"}}>
                        {time}
                    </span>
                  ))}
              </Card>
            ))}
          </Content>
          :null}
          <Sider style={{ background: "#F0F2F5" }}></Sider>
        </Layout>
      </Layout>

    </>
  );
};

export default connect()(EducationDetails);
