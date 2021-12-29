import React from "react";
import { Card } from "antd";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const funColor = () => {
  return "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
};

const chartData = [
  { name: "A", value: 25, fill: "#FF930F" },
  { name: "B", value: 36, fill: "#00FF87" },
  { name: "D", value: 39, fill: "#FF5E5E" },
];

function Course() {
  const CustomTooltipFormatter = ({ payload }) => {
    return (
      <div style={{ background: "#000", color: "#fff", padding: "10px" }}>
        <h1 style={{ color: "#fff",margin:"0" }}>{payload[0]?.value}%</h1>
      </div>
    );
  };

  return (
    <Card style={{ width: "33%",padding:"1rem" }}>
      <h2 style={{fontWeight:"bold"}}>Course</h2>
      <h1 style={{fontWeight:"bold",color:"#B7B6B6"}}>Total course assigned</h1>
      <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
        <ResponsiveContainer width="50%" height={250}>
          <PieChart>
            <Pie
              data={chartData}
              cx={"50%"}
              cy={"50%"}
              fill="#8884d8"
              dataKey="value"
              innerRadius={50}
              outerRadius={100}
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.fill ? entry.fill : "blue"}
                />
              ))}
            </Pie>
            <Tooltip content={(v) => CustomTooltipFormatter(v)} />
          </PieChart>
        </ResponsiveContainer>

        <div style={{}}>
          <div style={{ display: "flex",alignItems:"center",gap:"1rem",marginBottom:"1rem" }}>
            <img style={{marginBottom:"0.5rem"}} src="greentick.svg" />
            <h1>Course complete</h1>
          </div>
          <div style={{ display: "flex",alignItems:"center",gap:"1rem",marginBottom:"1rem" }}>
            <img style={{marginBottom:"0.5rem"}} src="oran.svg" />
            <h1>ongoing course</h1>
          </div>
          <div style={{ display: "flex",alignItems:"center",gap:"1rem" }}>
            <img style={{marginBottom:"0.5rem"}} src="red.svg" />
            <h1>Not Started</h1>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Course;
