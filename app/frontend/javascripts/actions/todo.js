import fetch from 'isomorphic-fetch';

export const GET_TODOS = 'GET_TODOS';
export const LOAD_TODOS = 'LOAD_TODOS';

// Later this will accept userId to be used to fetch Todos
// Returns a function that dispatches an action
export function fetchTodos() {
  return dispatch => {
    return fetch('/api/todos').then(response => {
      return response.json();
    }).then(jsonResponse => {
      return dispatch(loadTodos(jsonResponse))
    });
  }
};

export function getTodos() {
  return (dispatch) => {
    return dispatch(fetchTodos());
  };
};

export function loadTodos(todos) {
  return {
    type: LOAD_TODOS,
    payload: {
      todos: todos
    }
  };
};
