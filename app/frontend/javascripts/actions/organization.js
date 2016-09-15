import { api_request } from '../helpers/api_client';

export const LOAD_ORGANIZATIONS = 'LOAD_ORGANIZATIONS';
export const LOAD_ORGANIZATION = 'LOAD_ORGANIZATION';
export const ADD_ORGANIZATION = 'ADD_ORGANIZATION';

export function getOrganizations() {
  return (dispatch) => {
    return dispatch(fetchOrganizations());
  }
}

export function getOrganization(id) {
  return dispatch => {
    return dispatch(fetchOrganization(id));
  };
}

export function addOrganization(name, description) {
  return (dispatch) => {
    return dispatch(createOrganization(name, description));
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

export function fetchOrganization(id) {
  return dispatch => {
    return api_request({
      url: `organizations/${id}`,
      method: 'get'
    }).then(response => {
      return response.json();
    }).then(json_resp => {
      return dispatch(loadOrganization(json_resp));
    })
  }
}

export function createOrganization(name, description) {
  return dispatch => {
    return api_request({
      url: 'organizations',
      method: 'post',
      body: {
        name: name,
        description: description
      }
    }).then(response => {
      return response.json();
    }).then(json_resp => {
      return dispatch(appendOrganization(json_resp));
    });
  }
}

export function loadOrganizations(json_resp) {
  return {
    type: LOAD_ORGANIZATIONS,
    payload: json_resp
  };
}

export function appendOrganization(json_resp) {
return {
    type: ADD_ORGANIZATION,
    payload: json_resp
  };
}

export function loadOrganization(json_resp) {
  return {
    type: LOAD_ORGANIZATION,
    payload: json_resp
  }
}
