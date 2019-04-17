import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './todolist';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <ToDoList/>
    </Provider>
  )
}

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App />, app);