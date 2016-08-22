import { combineReducers } from 'redux';
import {
  GET_TODOS, LOAD_TODOS
} from '../actions/todo'

function todos(state =  { todos: [] }, action) {
  switch (action.type) {
    case LOAD_TODOS:
      return Object.assign({}, state, {
        todos: action.payload.todos
      });
    default:
      return state;
  }
}

const todoReducer = combineReducers({
  todos
});

export default todoReducer;
