import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers/combined_reducer';

// Rename this file to store.js
export default function configureStore() {
  return createStore(
    reducers,
    applyMiddleware(
      thunkMiddleware
    )
  );
};
