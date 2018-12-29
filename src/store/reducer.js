
import  {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_LIST_ITEM ,INTT_LIST_ACTION} from './actionTypes'

const defaultState = {
  inputValue: "4324",
  list: [3,2,1]
};
//reducer 可以接受state , 绝不能修改state
export default (state = defaultState, action) => {
  console.log(action)
   if(action.type=== CHANGE_INPUT_VALUE){
     const newState = JSON.parse(JSON.stringify(state));
     newState.inputValue= action.value;

     return newState;
   }
   if(action.type=== INTT_LIST_ACTION){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list= action.data;

    return newState;
  }
   if(action.type === ADD_TODO_ITEM){
      const newState= JSON.parse(JSON.stringify(state));
      newState.list.push(newState.inputValue);
      newState.inputValue= '';
      console.log(newState);
      return newState;
   }
   if(action.type === DELETE_LIST_ITEM){
    const newState= JSON.parse(JSON.stringify(state));
    console.log(action.index)
    newState.list.splice(action.index,1);
    console.log(newState);
    return newState;
 }
  return state;
};
