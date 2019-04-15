import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './todolist'

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<ToDoList />, app);