import React from 'react';
import Modal from '../shared/modal/modal';
import ModalBody from '../shared/modal/modal_body';
import ModalHeader from '../shared/modal/modal_header';
import { connect } from 'react-redux';
import { toggleModal } from '../../actions/sign_up_modal';

class SignUpModal extends React.Component {
  handleClose(event) {
    event.preventDefault();
    this.props.dispatch(toggleModal());
  }

  render() {
    return (
      <Modal show={this.props.displayModal}>
        <ModalBody>
          <ModalHeader>
            <a href='#' onClick={this.handleClose.bind(this)}>x</a>
          </ModalHeader>
          <p>This is the sign up modal</p>
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
