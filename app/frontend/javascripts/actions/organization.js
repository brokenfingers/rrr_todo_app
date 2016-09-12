import { api_request } from '../helpers/api_client';

export const LOAD_ORGANIZATIONS = 'LOAD_ORGANIZATIONS';

export function getOrganizations() {
  return (dispatch) => {
    return dispatch(fetchOrganizations());
  }
}

// Need to handle errors
export function fetchOrganizations() {
  return dispatch => {
    return api_request({
      url: 'organizations',
      method: 'get'
    }).then(response => {
      return response.json();
    }).then(json_resp => {
      return dispatch(loadOrganizations(json_resp));
    });
  }
}

export function loadOrganizations(json_resp) {
  return {
    type: LOAD_ORGANIZATIONS,
    payload: {
      organizations: json_resp
    }
  };
}
