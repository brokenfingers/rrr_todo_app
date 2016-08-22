import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import todoReducer from '../reducers/todo';

export default function configureStore() {
  return createStore(
    todoReducer,
    applyMiddleware(
      thunkMiddleware
    )
  );
};
