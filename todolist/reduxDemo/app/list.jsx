import React, { Component } from 'react';

class List extends Component {
  handleOnClick(event, index) {
    this.props.removeItem(index);
  }
  render() {
    return (
      <ul>
        {this.props.list.map((item, index) => {
          return (
            <li
              key={index}
              onClick={(event) => this.handleOnClick(event, index)}
            >
              {item}
            </li>
          )
        })}
      </ul>
    )
  }
}

export default List;