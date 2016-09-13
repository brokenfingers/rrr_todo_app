import {
  TOGGLE_ORG_MODAL
} from '../actions/organization_modal';

export default function organizationModal(state = {
  displayOrgModal: false
}, action) {
  switch (action.type) {
    case TOGGLE_ORG_MODAL:
      return Object.assign({}, state, {
        displayOrgModal: !state.displayOrgModal
      });
    default:
      return state;
  }
}
