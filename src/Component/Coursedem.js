import React from "react";
import { Card } from "antd";

function Coursedem({ showEmp, show, title }) {
  console.log(show, showEmp, title);
  return (
    <Card style={{ width: "33%", padding: "1rem",borderRadius:"7px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1 style={{ color: "#1B2559", fontSize: "16px" }}>{title}</h1>
        {showEmp &&  <div style={{ display: "flex", alignItems: "center" }}>
            <h1 style={{ marginRight: "0.5rem", marginBottom: "0",color:"#6A707E" }}>Show:</h1>
            <h1
              style={{
                marginRight: "0.5rem",
                marginBottom: "0",
                color: "#3672E9",
              }}
            >
              Employee
            </h1>
            <img src="lastar.svg" />
          </div>}
      </div>
      {show && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            // padding:"2rem"
            paddingTop: "1rem",
          }}
        >
          {[
            "Introduction to hadoop",
            "Getting started with hadoop",
            "Introduction to hadoop",
            "Introduction to hadoop",
            "Introduction to hadoop",
            "Introduction to hadoop",
          ].map((itm, idx) => {
            return (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <img
                  src="/last.svg"
                  style={{
                    
                    width: "45px",
                    height: "45px",
            
                  }}
                />
                <div style={{ paddingLeft: "1rem" }}>
                  <h1 style={{ margin: "0" }}>{itm}</h1>
                  <p style={{ margin: "0" }}>28 Employee</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Card>
  );
}

export default Coursedem;
