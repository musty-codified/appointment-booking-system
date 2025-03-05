import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext.js";
// import ReactPaginate from 'react-paginate';
import { Breadcrumb, Layout, Menu, Table, Tag, Badge, theme } from "antd";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("Appointment", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const columns = [
  {
    title: "Username",
    dataIndex: "username",
    key: "Username",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "Date",
  },
  {
    title: "Time Slot",
    dataIndex: "timeSlot",
    key: "Time Slot",
  },
];

const AppointmentView = () => {
  const { getAllBookings, fetchAllBookings, totalElements } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  const activeStyles = {
    color: "springgreen",
  };

  const { token: { colorBgContainer, borderRadiusLG },} = theme.useToken();

  useEffect(() => {
    console.log("Calling fetchAllBookings inside useEffect...");
    fetchAllBookings();

    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("Formatted Bookings Data:", getAllBookings);

  return (
    <div>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          />
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item>Booking</Breadcrumb.Item>
              <Breadcrumb.Item>Appointments</Breadcrumb.Item>
            </Breadcrumb>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              {/* if (fetching) {
                  return <Spin indicator={antIcon}/>
                } */}
              <Table
                dataSource={getAllBookings.map((elem)=>({
                  key: elem.key, 
                  username: elem.username,
                  date: elem.date,
                  timeSlot :elem.timeSlot
                }
                  ))}
                columns={columns}
                bordered
                title={() => (
                  <>
                    APPOINTMENTS
                    <Tag style={{ marginLeft: "15px" }}>
                      Number of Appointments
                    </Tag>
                    <Badge style={activeStyles} count={totalElements} />
                  </>
                )}
                pagination={{ pageSize: 10 }}
                scroll={{ y: 240 }}
                rowKey={(elem) => elem.key}
              />
              ;
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design ©2025 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default AppointmentView;
