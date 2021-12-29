import React from "react";
import "./Serach.css"
import {
  Card,
  Input,
  Button,
  Col,
  Row,
  Select,
  InputNumber,
  DatePicker,
  AutoComplete,
  Cascader,
  Tooltip,
  
} from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Option } = Select;

function Serach() {
  return (
    <div style={{width:"40%"}}>
      <Card style={{padding:"0.3rem"}}>
      <Input.Group compact style={{display:"flex",background:"#FAFAFA",borderRadius:"5px",alignItems:"center"}}>
        <span style={{color:"#6A707E"}}>Show:</span>
      <Select defaultValue="Option1" style={{color:"#3672E9"}} bordered={false}>
        <Option value="Option1" >Team</Option>
        <Option value="Option2">Employee</Option>
        <Option value="Option3">Business unit</Option>
      </Select>
      <Input style={{ width: '100%' }}  placeholder="Search Team" suffix={<SearchOutlined />} bordered={false}/>
    </Input.Group>
      </Card>
    </div>
  );
}

export default Serach;
