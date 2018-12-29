import { CHANGE_INPUT_VALUE ,ADD_TODO_ITEM ,DELETE_LIST_ITEM ,INTT_LIST_ACTION} from './actionTypes';

export const getInputChangeAction = (value) => ({
    type:CHANGE_INPUT_VALUE,
    value
});
export const getAddItemAction = () => ({
    type:ADD_TODO_ITEM
})
export const getDeleteItemAction = (index) => ({
    type:DELETE_LIST_ITEM,
    index
})

export const initListAction = (data) =>({
    type:INTT_LIST_ACTION,
    data
})