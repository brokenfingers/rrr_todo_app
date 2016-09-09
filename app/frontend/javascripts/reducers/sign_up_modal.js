import {
  TOGGLE_MODAL
} from '../actions/sign_up_modal';

export default function signUpModal(state = { displayModal: false }, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return Object.assign({}, state, {
        displayModal: !state.displayModal
      });
    default:
      return state;
  }
}
