import React from 'react';
import Modal from '../shared/modal/modal';
import ModalBody from '../shared/modal/modal_body';

export default class SignUpModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal show={this.props.displayModal}>
        <ModalBody>
          <p>This is the sign up modal</p>
        </ModalBody>
      </Modal>
    );
  }
}
