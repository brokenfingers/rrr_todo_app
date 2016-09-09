import {
  TOGGLE_MODAL
} from '../actions/sign_up_modal';

import {
  SIGN_IN
} from '../actions/authentication';

export default function signUpModal(state = { displayModal: false }, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return Object.assign({}, state, {
        displayModal: !state.displayModal
      });
    case SIGN_IN:
    return Object.assign({}, state, {
      displayModal: false
    });
    default:
      return state;
  }
}
