import React, { Component, Fragment } from 'react';
import List from './list.jsx';
import store from './store';
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionTypes.js';

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
    const action = {
      type: CHANGE_INPUT_VALUE,
      inputValue: event.target.value,
    }
    store.dispatch(action);
  }
  handleOnKeyUp(event) {
    const action = {
      type: ADD_TODO_ITEM,
      event,
    }
    store.dispatch(action);
  }
  removeItem(index) {
    const action = {
      type: DELETE_TODO_ITEM,
      index,
    }
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