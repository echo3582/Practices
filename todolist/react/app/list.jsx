import React, { Component } from 'react';

class List extends Component {
  handleOnClick(event, index) {
    const { list, removeItem } = this.props;
    list.splice(index, 1);
    removeItem(list);
  }
  render() {
    const { list } = this.props;
    return (
      <ul>
        {
          list.map((item, index) => {
            return <li key={item} onClick={(event) => this.handleOnClick(event, index)}>{item}</li>
          })
        }
      </ul>
    )
  }
}

export default List;