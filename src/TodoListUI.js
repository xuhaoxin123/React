import React, { Component } from "react";
import { Input ,List ,Button} from "antd";


const TodoListUI=(props)=>{
    return (
        <div style={{ marginTop: "20px" }}>
        <Input
          placeholder="Basic usage"
          value={props.inputValue}
          style={{ width: "300px", marginRight: "30px", marginLeft: "60px" }}
          onChange={props.handleInputChnage}
        />
        <Button type="primary" onClick={props.handleBtnClick}>
          Primary
        </Button>
        <List
          style={{ marginTop: "20px", width: "600px" }}
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item onClick={()=>{props.handleItemDelete(index)}}>
              {item}
            </List.Item>
          )}
        />
      </div>

    )

}
export default TodoListUI;