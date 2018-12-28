import React, { Component } from "react";

import TodoListUI from "./TodoListUI";

import store from "./store/index.js";

import "antd/dist/antd.css";

import { getInputChangeAction, getAddItemAction ,getDeleteItemAction} from "./store/actionCreators";


class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = store.getState();
    this.handleItemDelete= this.handleItemDelete.bind(this)
    //更新数据
    store.subscribe(this.handleStoreChnage);
  }
  handleInputChnage = e => {
    console.log(e.target.value);

    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  };
  //更新
  handleStoreChnage = () => {
    this.setState(store.getState());
  };
  handleBtnClick = () => {
    const action = getAddItemAction();
    store.dispatch(action);
  };
  handleItemDelete(index){
    alert(index)
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }
  render() {
    return (
       <TodoListUI
        inputValue={this.state.inputValue}
        handleInputChnage={this.handleInputChnage}
        handleBtnClick={this.handleBtnClick}
        list={this.state.list}
        handleItemDelete={this.handleItemDelete}
        />      
    );
  }
}

export default TodoList;
