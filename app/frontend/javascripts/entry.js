import React from 'react';
import { render } from 'react-dom';
import TodoList from './components/todo_list';


render(
  <TodoList />,
  document.getElementById('todo-list')
);
