import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '../shared/modal/modal';
import ModalBody from '../shared/modal/modal_body';
import ModalHeader from '../shared/modal/modal_header';
import { toggleModal } from '../../actions/organization_modal';

class OrganizationModal extends Component {
  handleClose(event) {
    if (event.key === 'Escape') {
      this.props.dispatch(toggleModal());
    }
  }

  render() {
    return (
      <div onKeyUp={this.handleClose.bind(this)}>
        <Modal show={this.props.displayModal}>
          <ModalBody>
            <p>This is the Org Modal</p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    displayModal: state.organizationModal.displayOrgModal
  };
};

export default connect(mapStateToProps)(OrganizationModal);
