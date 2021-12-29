import { Card } from "antd";
import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Bar,
  Tooltip,
  Legend,
} from "recharts";

const Visitor = () => {
  const chartBar = [
    {
      name: "Monday",
      uv: 9000,
      pv: 72400,
    },
    {
      name: "Tuesday",
      uv: 25000,
      pv: 72400,
    },
    {
      name: "Wednesday",
      uv: 20000,
      pv: 72400,
    },
    {
      name: "Thursday",
      uv: 45000,
      pv: 72400,
    },
    {
      name: "Friday",
      uv: 45000,
      pv: 72400,
    },
    {
      name: "Staurday",
      uv: 45000,
      pv: 72400,
    },
    {
      name: "Sunday",
      uv: 45000,
      pv: 72400,
    },
  ];

  const CustomTooltipFormatter = ({ payload }) => {
  
    return (
      <div style={{ background: "#000", color: "#fff", padding: "10px" }}>
        <h1 style={{ color: "#fff" }}>Viewed : {payload[0]?.value}</h1>
        <h1 style={{ color: "#fff" }}>Purchased : {payload[1]?.value}</h1>
      </div>
    );
  };

  return (
    <Card style={{ width: "67%", padding: "1rem" }}>
      <h2 style={{}}>Visitors</h2>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2
          style={{
            fontWeight: "bold",
            fontSize: "2rem",
            paddingRight: "5rem",
            margin: "0",
          }}
        >
          254,845
        </h2>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <h1 style={{ margin: "0" }}>Most Visted</h1>
          <div style={{ display: "flex", gap: "2rem" }}>
            <h1
              style={{
                background: "#D3E2FF",
                borderRadius: "3px",
                color: "#3672E9",
                fontWeight: "bold",
                margin: "0",
                padding: "0.2rem",
                fontSize: "0.75rem",
              }}
            >
              Introduction to hadoop
            </h1>
            <h1
              style={{
                background: "#D3E2FF",
                borderRadius: "3px",
                color: "#3672E9",
                fontWeight: "bold",
                margin: "0",
                padding: "0.2rem",
                fontSize: "0.75rem",
              }}
            >
              Introduction to hadoop
            </h1>
            <h1
              style={{
                background: "#D3E2FF",
                borderRadius: "3px",
                color: "#3672E9",
                fontWeight: "bold",
                margin: "0",
                padding: "0.2rem",
                fontSize: "0.75rem",
              }}
            >
              Introduction to hadoop
            </h1>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", gap: "2rem",justifyContent:"space-between" }}>
        <div style={{ display: "flex", gap: "2rem" }}>
        <h1 style={{ color: "#B3B3B3" }}>New/Returning</h1>
        <h1 style={{ color: "#B3B3B3" }}>45,762/2491</h1>

        </div>
        <div style={{display:"flex",gap: "2rem"}}>
          <div style={{display:"flex",gap:"0.3rem"}}>
            <img style={{marginBottom:"0.5rem"}} src="/purple.svg"/>
          <h1 style={{}}>New Visitor</h1></div>
          <div style={{display:"flex",gap:"0.3rem"}}>
            <img style={{marginBottom:"0.5rem"}} src="/blue.svg"/>
          <h1>Returning Visitor</h1></div>
        </div>
        
       
      </div>
      <div style={{ display: "flex", width: "100%", height: "300px" }}>
        <ResponsiveContainer>
          <BarChart width="100%" height={180} data={chartBar}barCategoryGap="27%">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={(v) => CustomTooltipFormatter(v)} />
            {/* <Legend /> */}
            <Bar dataKey="pv" fill="#4318FF" radius={[100, 100, 0, 0]} />
            <Bar dataKey="uv" fill="#6AD2FF" radius={[100, 100, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default Visitor;
