import React, { Component, Fragment } from 'react';
import List from './list';

class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      list: []
    }
  }
  handleOnChange(event) {
    this.setState({
      value: event.target.value
    })
  }
  handleOnKeyup(event) {
    const { list, value } = this.state;
    if (event.key === 'Enter') {
      this.setState({
        list: [...list, value],
        value: '',
      })
    }
  }
  removeItem(list) {
    this.setState({
      list: list,
    })
  }
  render() {
    const { list, value } = this.state;
    return (
      <Fragment>
        <input
          value={value}
          onChange={(event) => this.handleOnChange(event)}
          onKeyUp={(event) => this.handleOnKeyup(event)}
        />
        <List
          list={list}
          removeItem={(list) => this.removeItem(list)}
        />
      </Fragment>
    )
  }
}

export default ToDoList;