import {
  LOAD_ORGANIZATIONS
} from '../actions/organization';

export default function organization(state = {
  owned_organizations: [],
  joined_organizations: []
}, action) {
  switch (action.type) {
    case LOAD_ORGANIZATIONS:
      return Object.assign({}, state, {
        owned_organizations: action.payload.data.owned_organizations,
        joined_organizations: action.payload.data.joined_organizations
      });
    default:
      return state;
  }
};
