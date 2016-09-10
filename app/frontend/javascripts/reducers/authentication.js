import {
  SIGN_IN, SIGN_OUT
} from '../actions/authentication';

export default function authentication(state = {
  loggedIn: false
}, action) {
  switch (action.type) {
    case SIGN_IN:
      // Set localStorage creds
      localStorage.setItem('access_token', action.payload.headers.access_token);
      localStorage.setItem('client', action.payload.headers.client);
      localStorage.setItem('uid', action.payload.headers.uid);
      return Object.assign({}, state, {
        loggedIn: true
      });
    case SIGN_OUT:
      // Remove localStorage creds
      localStorage.removeItem('access_token');
      localStorage.removeItem('client');
      localStorage.removeItem('uid');
      return Object.assign({}, state, {
        loggedIn: false
      })
    default:
      return state;
  }
};
