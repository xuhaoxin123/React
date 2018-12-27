const defaultState = {
  inputValue: "4324",
  list: [3,2,1]
};
//reducer 可以接受state , 绝不能修改state
export default (state = defaultState, action) => {
   if(action.type=== 'change_input_value'){
     const newState = JSON.parse(JSON.stringify(state));
     newState.inputValue= action.value;

     return newState;
   }
   if(action.type === 'add_todo_item'){
      const newState= JSON.parse(JSON.stringify(state));
      newState.list.push(newState.inputValue);
      newState.inputValue= '';
      console.log(newState);
      return newState;
   }
   if(action.type === 'delete_list_item'){
    const newState= JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index,1);
    console.log(newState);
    return newState;
 }
  return state;
};
