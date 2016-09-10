import fetch from 'isomorphic-fetch';

const API_PATH = '/api'

// For stateless auth such as JWT (Devise token auth) it is not necessary to set CSRF tokens
// http://stackoverflow.com/questions/21357182/csrf-token-necessary-when-using-stateless-sessionless-authentication
export function api_request(data) {
  return fetch(`${API_PATH}/${data.url}`, {
    method: data.method,
    headers: getHeader(),
    body: JSON.stringify(data.body),
  });
};

// Helper function
function getHeader() {
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Token': localStorage.getItem('access_token'),
    'Client': localStorage.getItem('client'),
    'Uid': localStorage.getItem('uid')
  }
}
