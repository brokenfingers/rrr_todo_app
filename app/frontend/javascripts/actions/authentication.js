import fetch from 'isomorphic-fetch';

export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export function authenticateUser(payload) {
  return {
    type: SIGN_UP,
    payload: {
      headers: payload
    }
  };
};

export function sign_up(email, password) {
  return (dispatch) => {
    return dispatch(registerUser(email, password));
  };
};

// Need to get CSRF tokens first before sending request
export function registerUser(email, password) {
  return dispatch => {
    return fetch('/api/auth', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
        password_confirmation: password
      })
    }).then((response) => {
      return {
        access_token: response.headers.get('Access-Token'),
        client: response.headers.get('Client'),
        uid: response.headers.get('Uid')
      };
    }).then(data => {
      return dispatch(authenticateUser(jsonResponse));
    });
  }
};

export function deauthenticateUser() {

};
