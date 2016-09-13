import { combineReducers } from 'redux';
import todos from '../reducers/todo';
import signUpModal from '../reducers/sign_up_modal';
import authentication from '../reducers/authentication';
import organization from '../reducers/organization';
import organizationModal from '../reducers/organization_modal';

export default combineReducers({
  todos,
  signUpModal,
  authentication,
  organization,
  organizationModal
});
