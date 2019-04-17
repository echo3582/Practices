import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes.js';

export const changeInputValue = (inputValue) => {
  return {
    type: CHANGE_INPUT_VALUE,
    inputValue,
  }
}

export const addTodoItem = (event) => {
  return {
    type: ADD_TODO_ITEM,
    event,
  }
}

export const deleteTodoItem = (index) => {
  return {
    type: DELETE_TODO_ITEM,
    index,
  }
}