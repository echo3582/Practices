import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes.js';

const defaultState = {
  inputValue: '',
  list: [],
};

export default (state=defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    let newState = {...state};
    newState.inputValue = action.inputValue;
    return newState;
  }
  if (action.type === ADD_TODO_ITEM) {
    let newState = {...state};
    if (action.event.key === 'Enter') {
      newState.list = [...newState.list, action.event.target.value];
      newState.inputValue = '';
    }
    return newState;
  }
  if (action.type === DELETE_TODO_ITEM) {
    let newState = {...state};
    newState.list = newState.list.filter((item, index) => {
      return index !== action.index;
    })
    return newState;
  }
  return state;
}