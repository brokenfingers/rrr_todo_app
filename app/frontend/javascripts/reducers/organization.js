import {
  LOAD_ORGANIZATIONS, ADD_ORGANIZATION, LOAD_ORGANIZATION
} from '../actions/organization';

export default function organization(state = {
  owned_organizations: [],
  joined_organizations: [],
  organization: {
    groups: []
  }
}, action) {
  switch (action.type) {
    case LOAD_ORGANIZATIONS:
      return Object.assign({}, state, {
        owned_organizations: action.payload.data.owned_organizations,
        joined_organizations: action.payload.data.joined_organizations
      });
    case ADD_ORGANIZATION:
      return Object.assign({}, state, {
        owned_organizations: [...state.owned_organizations, action.payload.data.organization]
      });
    case LOAD_ORGANIZATION:
      return Object.assign({}, state, {
        organization: action.payload.data.organization
      });
    default:
      return state;
  }
};
