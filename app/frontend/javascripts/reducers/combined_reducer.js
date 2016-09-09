import { combineReducers } from 'redux';
import todos from '../reducers/todo';
import signUpModal from '../reducers/sign_up_modal';
import authentication from '../reducers/authentication';

export default combineReducers({
  todos,
  signUpModal,
  authentication
});
