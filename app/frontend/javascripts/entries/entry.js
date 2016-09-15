import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import configureStore from '../stores/app_store';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Homepage from '../components/pages/homepage'
import Dashboard from '../components/pages/dashboard'
import OrganizationPanel from '../components/dashboard/organization_panel';
import OrganizationDashboard from '../components/dashboard/organization_dashboard';

const store = configureStore();

// Create helper module to handle information about loggedIn or not, etc
function requireAuth(nextState, replace) {
  if (!localStorage.getItem('access_token') && !localStorage.getItem('client') && !localStorage.getItem('uid')) {
    replace({pathname: '/'});
  }
}

// Dashboard needs a hook to check for user session
// Problem with react-router rails needs to render the same index page for all
// If not it will not find the correct dom to render
render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Homepage} />
      <Route path='/dashboard' component={Dashboard} onEnter={requireAuth}>
        <IndexRoute component={OrganizationPanel}/>
        <Route path='organizations' component={OrganizationPanel}/>
        <Route path='organizations/:id' component={OrganizationDashboard} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('todo-list')
);
