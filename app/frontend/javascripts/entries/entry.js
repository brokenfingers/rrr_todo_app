import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import configureStore from '../stores/app_store';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Homepage from '../components/pages/homepage'
import Dashboard from '../components/pages/dashboard'

const store = configureStore();

// Dashboard needs a hook to check for user session
// Problem with react-router rails needs to render the same index page for all
// If not it will not find the correct dom to render
render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Homepage} />
      <Route path='/dashboard' component={Dashboard} />
    </Router>
  </Provider>,
  document.getElementById('todo-list')
);
