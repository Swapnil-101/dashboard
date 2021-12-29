import React from "react";
import "./Head.css";
import { Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

function Head() {
  return (
    <div
      style={{ display: "flex", gap: "7.25rem", margin: "1rem  0 0.9rem 0",justifyContent:"space-between",alignItems:"center" }}
    >
      <div style={{display:"flex"}}>
        <img style={{ marginLeft: "4rem" }} src="./logo.svg" />

        <div className="header">
          <div style={{ display: "flex",alignItems:"center" }}>
            <Button type="primary" style={{borderRadius:"3px"}}>
              Explore <DownOutlined />
            </Button>
            <div className="serch">
              <img src="./serch.svg" />
              <input className="input" placeholder="Search Course" />
            </div>
          </div>
        </div>
      </div>
      <div style={{display:"flex",alignItems:"center",marginRight:"4rem",gap:"1rem"}}>
          <img src="alertico.svg"/>
          <img src="img.svg"/>
          <div style={{display:"flex",flexDirection:"column"}}>
              <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
              <h3 style={{margin:"0",fontWeight:"bold",color:"#2C3E50"}}>Jane Doe</h3> 
               <img style={{marginLeft:"0.5rem"}} src="dropimg.svg"/>
              </div>
              
                <h4 style={{fontWeight:"lighter"}}>987654321</h4>
          </div>
         
      </div>
    </div>
  );
}

export default Head;
