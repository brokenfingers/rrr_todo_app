import React from 'react';
import Modal from '../shared/modal/modal';
import ModalBody from '../shared/modal/modal_body';
import ModalHeader from '../shared/modal/modal_header';
import { connect } from 'react-redux';
import { toggleModal } from '../../actions/sign_up_modal';
import { loginUser } from '../../actions/authentication';

class SignUpModal extends React.Component {
  handleAuth(event) {
    event.preventDefault();
    this.props.dispatch(loginUser(this.refs.email.value, this.refs.password.value));
  }

  handleRenderRegistration(event) {
    event.preventDefault();
    // this.setState();
  }

  renderForm() {
    // check state and render corresponding form state => { returningUser: true }
  }

  render() {
    return (
      <Modal show={this.props.displayModal} id='sign-up-modal'>
        <ModalBody>
          <div className='row'>
            <div className='col-xs-7'>
              <p>Login</p>
              <p>Please fill in your basic info</p>
              <form onSubmit={this.handleAuth.bind(this)}>
                <input className='form-control' type='email' ref='email'></input>
                <input className='form-control' type='password' ref='password'></input>
                <button className='form-control' type='submit'>Login</button>
              </form>
            </div>
            <div className='col-xs-5'>
              <p>Sign Up Now</p>
              <p>Lorem Ipsum</p>
              <a href='#' onClick={this.handleRenderRegistration.bind(this)}>Register Now</a>
            </div>
          </div>
        </ModalBody>
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  return {
    displayModal: state.signUpModal.displayModal
  };
};

export default connect(mapStateToProps)(SignUpModal);
