import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '../shared/modal/modal';
import ModalBody from '../shared/modal/modal_body';
import ModalHeader from '../shared/modal/modal_header';
import { toggleModal } from '../../actions/organization_modal';
import { addOrganization } from '../../actions/organization';

class OrganizationModal extends Component {
  handleClose(event) {
    if (event.key === 'Escape') {
      this.props.dispatch(toggleModal());
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(addOrganization(this.refs.name.value, this.refs.description.value));
  }

  render() {
    return (
      <div onKeyUp={this.handleClose.bind(this)}>
        <Modal show={this.props.displayModal}>
          <ModalBody>
            <div className='row'>
              <p>Create an Organization</p>
              <p>Please fill in the basic info</p>
              <form onSubmit={this.handleSubmit.bind(this)}>
                <input className='form-control' type='text' ref='name'></input>
                <input className='form-control' type='textarea' ref='description'></input>
                <button className='form-control' type='submit'>Create</button>
              </form>
            </div>
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
