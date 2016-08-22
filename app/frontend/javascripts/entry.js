import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import configureStore from './stores/todo';
import TodoList from './components/todo_list';

const store = configureStore();

render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById('todo-list')
);
