import {
  LOAD_ORGANIZATIONS
} from '../actions/organization';

export default function organization(state = {
  organizations: []
}, action) {
  switch (action.type) {
    case LOAD_ORGANIZATIONS:
      return Object.assign({}, state, {
        organizations: action.payload.organizations
      });
    default:
      return state;
  }
};
