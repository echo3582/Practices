import React, { Component, Fragment } from 'react';
import List from './list.jsx';
import { changeInputValue, addTodoItem, deleteTodoItem } from './store/actionCreator.js';
import { connect } from 'react-redux';

class ToDoList extends Component {
  render() {
    return (
      <Fragment>
        <input
          value={this.props.inputValue}
          onChange={(event) => this.props.handleOnChange(event)}
          onKeyUp={(event) => this.props.handleOnKeyUp(event)}
        />
        <List
          list={this.props.list}
          removeItem={(index) => this.props.removeItem(index)}
        />
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleOnChange(event) {
      const action = changeInputValue(event.target.value);
      dispatch(action);
    },
    handleOnKeyUp(event) {
      const action = addTodoItem(event);
      dispatch(action);
    },
    removeItem(index) {
      const action = deleteTodoItem(index);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);