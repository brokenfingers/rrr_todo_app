import {
  SIGN_UP, SIGN_IN, SIGN_OUT
} from '../actions/authentication';

export default function authentication(state = {
  loggedIn: false
}, action) {
  switch (action.type) {
    case SIGN_UP:
    case SIGN_IN:
      // Set localStorage creds
      return Object.assign({}, state, {
        loggedIn: true
      });
    case SIGN_OUT:
      // Remove localStorage creds
      return Object.assign({}, state, {
        loggedIn: false
      })
    default:
      return state;
  }
};
