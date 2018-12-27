import React, { Component } from "react";

import store from "./store/index.js";

import "antd/dist/antd.css";

import { Input } from "antd";
import { Button } from "antd";
import { List } from "antd";

class TodoList extends Component {
  constructor(props) {
    super(props);
    console.log(store.getState())
    this.state = store.getState();
  }
  handleInputChnage=()=>{
    
  }
  render() {
    return (
      <div style={{ marginTop: "20px" }}>
        <Input
          placeholder="Basic usage"
          value={this.state.inputValue}
          style={{ width: "300px", marginRight: "30px", marginLeft: "60px" }}
          onChange={this.handleInputChnage}
        />
        <Button type="primary">Primary</Button>
        <List
        style={{marginTop:'20px',width:'600px'}}
          bordered
          dataSource={this.state.list}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>
    );
  }
}

export default TodoList;
