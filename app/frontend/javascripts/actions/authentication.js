import { api_request } from '../helpers/api_client';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const VERIFY_SESSION = 'VERIFY_SESSION';

export function authenticateUser(payload) {
  return {
    type: SIGN_IN,
    payload: {
      headers: payload
    }
  };
};

export function verifySession() {
  return {
    type: VERIFY_SESSION,
    payload: {
      sessionValid: sessionValid()
    }
  };
}

export function sign_up(email, password) {
  return (dispatch) => {
    return dispatch(registerUser(email, password));
  };
};

export function loginUser(email, password) {
  return dispatch => {
    return api_request({
      url: 'auth/sign_in',
      method: 'post',
      body: {
        email: email,
        password: password
      }
    }).then((response) => {
      return parseAuthResponse(response);
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
    return api_request({
      url: 'auth',
      method: 'post',
      body: {
        email: email,
        password: password
      }
    }).then((response) => {
      return parseAuthResponse(response)
    }).then(data => {
      if (data.status === 401) {
        alert('Failed need to display error message');
      } else {
        return dispatch(authenticateUser(data));
      }
    });
  }
};

export function signOutUser() {
  return dispatch => {
    return api_request({
      url: 'auth/sign_out',
      method: 'delete'
    }).then((response) => {
      return parseAuthResponse(response)
    }).then(data => {
      if (data.status === 401) {
        alert('Failed need to display error message');
      } else {
        return dispatch(deauthenticateUser());
      }
    });
  };
}

export function deauthenticateUser() {
  return {
    type: SIGN_OUT
  };
};

// Helper functions
function parseAuthResponse(response) {
  return {
    access_token: response.headers.get('Access-Token'),
    client: response.headers.get('Client'),
    uid: response.headers.get('Uid'),
    expiry: response.headers.get('Expiry'),
    status: response.status
  };
}

function sessionValid() {
  let expiry = localStorage.getItem('expiry') ? parseInt(localStorage.getItem('expiry')) : 0;
  return unixTime() < expiry;
}

function unixTime() {
  return new Date().getTime() / 1000;
}
