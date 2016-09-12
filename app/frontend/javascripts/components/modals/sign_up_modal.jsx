import React from 'react';
import Modal from '../shared/modal/modal';
import ModalBody from '../shared/modal/modal_body';
import ModalHeader from '../shared/modal/modal_header';
import { connect } from 'react-redux';
import { toggleModal } from '../../actions/sign_up_modal';
import { loginUser, registerUser } from '../../actions/authentication';

// Use state on the fields so that they can be cleared after submission
// Should redirect the user to Dashboard if logged in else to Homepage if logged out
class SignUpModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      returningUser: true
    };
  }

  handleAuth(event) {
    event.preventDefault();
    this.props.dispatch(loginUser(this.refs.email.value, this.refs.password.value));
  }

  handleRenderRegistration(event) {
    event.preventDefault();
    this.setState({ returningUser: !this.state.returningUser });
  }

  handleRegistration(event) {
    event.preventDefault();
    this.props.dispatch(registerUser(this.refs.email.value, this.refs.password.value));
  }

  handleClose(event) {
    if (event.key === 'Escape') {
      this.props.dispatch(toggleModal());
    }
  }

  renderForm() {
    // check state and render corresponding form state => { returningUser: true }
    if (this.state.returningUser) {
      return (
        <div>
          <p>Login</p>
          <p>Please fill in your basic info</p>
          <form onSubmit={this.handleAuth.bind(this)}>
            <input className='form-control' type='email' ref='email'></input>
            <input className='form-control' type='password' ref='password'></input>
            <button className='form-control' type='submit'>Login</button>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <p>Sign Up</p>
          <p>Please fill in the following info</p>
          <form onSubmit={this.handleRegistration.bind(this)}>
            <input className='form-control' type='email' ref='email'></input>
            <input className='form-control' type='password' ref='password'></input>
            <button className='form-control' type='submit'>Sign Up</button>
          </form>
        </div>
      );
    }
  }

  render() {
    return (
      <div onKeyUp={this.handleClose.bind(this)}>
        <Modal show={this.props.displayModal} id='sign-up-modal'>
          <ModalBody>
            <div className='row'>
              <div className='col-xs-7'>
                {this.renderForm()}
              </div>
              <div className='col-xs-5'>
                <p>Sign Up Now</p>
                <p>Lorem Ipsum</p>
                <a href='#' onClick={this.handleRenderRegistration.bind(this)}>Register Now</a>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    displayModal: state.signUpModal.displayModal
  };
};

export default connect(mapStateToProps)(SignUpModal);
