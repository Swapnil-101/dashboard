import React from "react";
import Serach from "./Serach";
import Course from "./Course";
import YourStat from "./YourStat";
import Anno from "./Anno";
import Visitor from "./Visitor";
import Coursedem from "./Coursedem";
import Recent from "./Recent";
import Recentsec from "./Recentsec";
import { useState } from "react";
import { Layout, Menu, Breadcrumb, Typography, Card } from "antd";
import "./Sidebar.css";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  HomeOutlined,
  BookOutlined, 
  SettingOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Title } = Typography;

const Sidebar = () => {
  const [collapsed, setcollapsed] = useState(false);
  return (
    <div style={{ background: "white" }}>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          theme="light"
          collapsible
          collapsed={collapsed}
          onCollapse={() => setcollapsed(!collapsed)}
        >
          <div className="logo" />
          <Menu defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" style={{fontWeight:"bold", borderLeft:"0.2rem solid #6A5DFF"}} icon={<HomeOutlined style={{fontSize:"1.2rem"}} />}>
              Home
            </Menu.Item>
            <SubMenu key="sub1" icon={<BookOutlined style={{fontSize:"1.2rem"}}/>} style={{fontWeight:"bold"}} title="My learning">
              <Menu.Item key="2" style={{fontWeight:"normal"}} icon={<img style={{height:"0.5rem"}} src="./dot.svg"/>}>Course</Menu.Item>
              <Menu.Item key="3" style={{fontWeight:"normal"}} icon={<img style={{height:"0.5rem"}} src="./dot.svg"/>}>Specialization</Menu.Item>
            </SubMenu>
            <Menu.Item key="4"  style={{fontWeight:"bold"}} icon={<img src="/learn.svg" style={{padding:"0"}}/>}>
              Learning Path
            </Menu.Item>
            <Menu.Item key="5"  style={{fontWeight:"bold"}} icon={<img src="/perf.svg" />}>
              Performance
            </Menu.Item>
            <Menu.Item key="6"  style={{fontWeight:"bold"}} icon={<ShoppingCartOutlined style={{fontSize:"1.2rem"}}/>}>
              Cart
            </Menu.Item>
            <Menu.Item key="7"  style={{fontWeight:"bold"}} icon={<SettingOutlined style={{fontSize:"1.2rem"}}/>}>
              Setting
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="ant-layout site-layout">
          <Content style={{ margin: "1.5rem 2.63rem" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Title level={2}>Performance</Title>
              {/* Top Greeting Container */}
              <div style={{ display: "flex", width: "100%", gap: "2rem" }}>
                <Card
                  className="ant-card-body"
                  style={{
                    width: "80%",
                    height: "5rem",
                    margin: "0",
                    padding: "0",
                    borderRadius:"7px"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ paddingLeft: "20px" }}>
                      <h2 style={{ fontSize: "1rem", fontWeight: "bold" }}>
                        Hello Jane !
                      </h2>
                      <h1
                        style={{ fontSize: "0.75rem", fontWeight: "lighter" }}
                      >
                        It’s good to see you again.
                      </h1>
                    </div>
                    <img
                      style={{ paddingRight: "0.7rem" }}
                      src="semilogo.svg"
                    />
                  </div>
                </Card>
                <Card style={{ width: "20%", backgroundColor: "#323232",borderRadius:"10px",padding:"1rem",backgroundImage:"url(./dwnbutton.svg)",backgroundRepeat:"no-repeat" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      
                    }}
                  >
                    <div>
                      <h1 style={{ color: "white", fontSize: "0.875rem" }}>
                        Download Report
                      </h1>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <h1
                          style={{
                            color: "#3672E9",
                            marginBottom: "0",
                            marginRight: "0.4rem",
                            fontSize: "0.75rem",
                          }}
                        >
                          Last week
                        </h1>
                        <img src="dropbalck.svg" />
                      </div>
                    </div>

                    <div style={{ display: "flex" }}>
                      <div></div>
                     <div style={{background:""}}> <img style={{}}src="dwn.svg" /></div>
                    </div>
                  </div>
                </Card>
              </div>
              {/* Search Container */}
              <div
                style={{ display: "flex", width: "100%", marginTop: "1rem" }}
              >
                <Serach />
              </div>
              {/* Analytics Conatiner  */}
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  marginTop: "1rem",
                  gap: "2rem",
                }}
              >
                <Course />
                <YourStat />
              </div>
              {/* Analytic 2 Container */}
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  marginTop: "1rem",
                  gap: "2rem",
                }}
              >
                <Anno />
                <Visitor />
              </div>
              {/* Bottom Container */}
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  marginTop: "1rem",
                  gap: "2rem",
                }}
              >
                <Coursedem show={true} showEmp={false} title={"Course in demand"}/>
                <Coursedem show={false} showEmp={false} title={"Recent Activity"}/>
                <Coursedem show={false} showEmp={true} title={"Recent Activity"}/>
                
              </div>
            </div>
            {/* maindiv */}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Sidebar;
