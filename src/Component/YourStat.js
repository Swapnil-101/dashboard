import { Card, Switch } from "antd";
import React, { useState } from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sun",
    pv: 0,
  },
  {
    name: "Mon",
    pv: 1,
  },
  {
    name: "Tue",
    pv: 3,
  },
  {
    name: "Wed",
    pv: 2,
  },
  {
    name: "Thur",
    pv: 4,
  },
  {
    name: "Fri",
    pv: 3,
  },
  {
    name: "sat",
    pv: 9,
  },
];

const json = [
  {
    icon: "/grn.svg",
    title: "279",
    arrow: false,
    variation: "-27.9%",
    status: "Active user",
  },
  {
    icon: "/attend.svg",
    title: "20%",
    arrow: true,
    variation: "-17.9%",
    status: "Attendance",
  },
  {
    icon: "./pad.svg",
    title: "279",
    arrow: true,
    variation: "-27.9%",
    status: "Total question resolved",
  },
  {
    icon: "/pep.svg",
    title: "279%",
    arrow: false,
    variation: "-27.9%",
    status: "Total enrolled",
  },
  {
    icon: "/per.svg",
    title: "279",
    arrow: false,
    variation: "-27.9%",
    status: "Total question resolved",
  },
  {
    icon: "/time.svg",
    title: "time",
    arrow: false,
    variation: "var",
    status: "Total hour spent",
  },
];

const Data = ({ title, icon, arrow, variation, status }) => {
  return (
    <div style={{ display: "flex", width: "30%"}}>
      <img style={{ marginRight: "2rem" }} src={icon} />
      <div>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          {title !== "time" ? (
            <>
              <h2 style={{ margin: "0",fontWeight:"bold" }}>{title}</h2>
              {arrow ? (
                <>
                  <img
                    src="/greenarrow.svg"
                    style={{ marginBottom: "0.3rem" }}
                  />
                  <h1 style={{ color: "green", margin: "0" }}>{variation}</h1>
                </>
              ) : (
                <>
                  
                  <img src="/redarrow.svg" />
                  <h1 style={{ color: "red", margin: "0" }}>{variation}</h1>
                </>
              )}
            </>
          ) : (
            <div style={{ display: "flex",alignItems:"baseline" }}>
              <h2 style={{margin:"0",fontWeight:"bold"}}>40</h2>
              <p style={{margin:"0"}}>hr</p>
              <h2 style={{margin:"0",fontWeight:"bold"}}>: 22</h2>
              <p  style={{margin:"0"}}>min</p>
              <h2 style={{margin:"0",fontWeight:"bold"}}>: 00</h2>
              <p  style={{margin:"0"}}>sec</p>
            </div>
          )}
        </div>
        <h1 style={{color:"#B3B3B3"}} >{status}</h1>
      </div>
    </div>
  );
};
function Secn() {
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height:"100%",
        marginTop:"2rem" 
      }}
    >
      {json.map((itm, idk) => {
        return (
          <Data
            key={idk}
            title={itm.title}
            icon={itm.icon}
            arrow={itm.arrow}
            variation={itm.variation}
            status={itm.status}
          />
        );
      })}
    </div>
  );
}

function YourStat() {
  const [change, setchange] = useState(true);
  return (
    <Card style={{ width: "67%", padding: "1rem" }}>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2 style={{ marginLeft: "12px",fontWeight: "bold" }}>Your statistics</h2>
          <div style={{ display: "flex",gap:"1rem" }}>
            <h1 style={{fontWeight: "bold"}} >Graph</h1>
            <Switch
              defaultChecked
              onChange={() => {
                setchange(!change);
              }}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0.8rem 0 0 0.8rem",
          }}
        >
          <h2 style={{fontWeight: "",marginBottom: "0"}}>Overview</h2>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h1 style={{ marginRight: "0.5rem", marginBottom: "0",color:"#6A707E" }}>Show:</h1>
            <h1
              style={{
                marginRight: "0.5rem",
                marginBottom: "0",
                color: "#3672E9",
              }}
            >
              Monthly
            </h1>
            <img src="dropgray.svg" />
          </div>
        </div>
        {change ? (
          <div>
            <div
              style={{
                display: "flex",
                margin: "0.8rem 0 0.5rem 0.8rem",
                gap: "1.5rem",
              }}
            >
              <h1
                style={{
                  background: "#D3E2FF",
                  borderRadius: "3px",
                  color: "#3672E9",
                  fontWeight: "bold",
                  margin: "0",
                  padding: "0.2rem",
                }}
              >
                Active User
              </h1>
              <h1 style={{ fontWeight: "bold", color: "#B7B6B6" }}>
                Attendance
              </h1>
              <h1 style={{ fontWeight: "bold", color: "#B7B6B6" }}>
                Hour Spent
              </h1>
              <h1 style={{ fontWeight: "bold", color: "#B7B6B6" }}>Enrolled</h1>
              <h1 style={{ fontWeight: "bold", color: "#B7B6B6" }}>
                Question resolved
              </h1>
              <h1 style={{ fontWeight: "bold", color: "#B7B6B6" }}>
                Quiz Score
              </h1>
            </div>
            <ResponsiveContainer width="100%" height={180}>
              <LineChart width={730} height={250} data={data} margin={{}}>
                <CartesianGrid strokeDasharray="0" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="pv" stroke="#3672E9" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <Secn />
        )}
      </div>

      <div></div>
    </Card>
  );
}

export default YourStat;
