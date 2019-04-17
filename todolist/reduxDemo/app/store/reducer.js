const defaultState = {
  inputValue: '',
  list: [],
};

export default (state=defaultState, action) => {
  if (action.type === 'changeInputValue') {
    let newState = {...state};
    newState.inputValue = action.inputValue;
    return newState;
  }
  if (action.type === 'addItem') {
    let newState = {...state};
    if (action.event.key === 'Enter') {
      newState.list = [...newState.list, action.event.target.value];
      newState.inputValue = '';
    }
    return newState;
  }
  if (action.type === 'removeItem') {
    let newState = {...state};
    newState.list.splice(action.index, 1);
    return newState;
  }
  return state;
}