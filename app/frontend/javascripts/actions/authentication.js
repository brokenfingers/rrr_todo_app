import fetch from 'isomorphic-fetch';

export const SIGN_UP = 'SIGN_UP'; // Probably won't use
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export function authenticateUser(payload) {
  return {
    type: SIGN_IN,
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

export function loginUser(email, password) {
  return dispatch => {
    return fetch('/api/auth/sign_in', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    }).then((response) => {
      return {
        access_token: response.headers.get('Access-Token'),
        client: response.headers.get('Client'),
        uid: response.headers.get('Uid'),
        status: response.status
      };
    }).then(data => {
      if (data.status === 401) {
        alert('Failed need to display error message');
      } else {
        return dispatch(authenticateUser(data));
      }
    });
  }
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
      return dispatch(authenticateUser(data));
    });
  }
};

export function deauthenticateUser() {

};
