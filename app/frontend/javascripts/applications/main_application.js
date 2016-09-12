import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import configureStore from '../stores/app_store';
import TodoList from '../components/todo_list';
import Application from '../components/layout/application';

const store = configureStore();

// This will be the presentational component

render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('todo-list')
);
