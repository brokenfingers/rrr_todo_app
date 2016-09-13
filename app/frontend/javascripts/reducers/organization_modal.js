import {
  TOGGLE_ORG_MODAL
} from '../actions/organization_modal';

import {
  ADD_ORGANIZATION
} from '../actions/organization';

export default function organizationModal(state = {
  displayOrgModal: false
}, action) {
  switch (action.type) {
    case TOGGLE_ORG_MODAL:
      return Object.assign({}, state, {
        displayOrgModal: !state.displayOrgModal
      });
    case ADD_ORGANIZATION:
      return Object.assign({}, state, {
        displayOrgModal: false
      });
    default:
      return state;
  }
}
