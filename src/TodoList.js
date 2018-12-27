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
    //更新数据
    store.subscribe(this.handleStoreChnage);
  }
  handleInputChnage=(e)=>{
    console.log(e.target.value);

    const action= {
      type:'change_input_value',
      value:e.target.value
    }
    store.dispatch(action);
  }
  //更新
  handleStoreChnage=()=>{
    this.setState(store.getState())
  }
  Btnlist=()=>{
    const action = {
      type:'add_todo_item'
    }
    store.dispatch(action);
  }
  delitem(index){
    alert(index)
    const action={
      type:'delete_list_item',
      index
    }
    store.dispatch(action);
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
        <Button type="primary" onClick={this.Btnlist}>Primary</Button>
        <List
        style={{marginTop:'20px',width:'600px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item,index) => <List.Item onClick={this.delitem.bind(this,index)}>{item}</List.Item>}
        />
      </div>
    );
  }
}

export default TodoList;
