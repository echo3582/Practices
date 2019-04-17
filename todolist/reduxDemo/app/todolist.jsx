import React, { Component, Fragment } from 'react';
import List from './list.jsx';
import store from './store';
import { changeInputValue, addTodoItem, deleteTodoItem } from './store/actionCreator.js';

class ToDoList extends Component {
  constructor() {
    super();
    this.state = store.getState();
    this.handleChange = this.handleChange.bind(this);
    store.subscribe(this.handleChange);
  }
  handleChange() {
    this.setState(store.getState());
  }
  handleOnChange(event) {
    let action = changeInputValue(event.target.value);
    store.dispatch(action);
  }
  handleOnKeyUp(event) {
    const action = addTodoItem(event);
    store.dispatch(action);
  }
  removeItem(index) {
    const action = deleteTodoItem(index);
    store.dispatch(action);
  }
  render() {
    return (
      <Fragment>
        <input
          value={this.state.inputValue}
          onChange={(event) => this.handleOnChange(event)}
          onKeyUp={(event) => this.handleOnKeyUp(event)}
        />
        <List
          list={this.state.list}
          removeItem={(index) => this.removeItem(index)}
        />
      </Fragment>
    )
  }
}

export default ToDoList;