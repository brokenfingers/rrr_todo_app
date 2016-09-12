import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import ApplicationLayout from '../layout/application_layout'
import SignUpModal from '../modals/sign_up_modal'

class Homepage extends Component {
  render() {
    return (
      <ApplicationLayout>
        <SignUpModal />
      </ApplicationLayout>
    )
  }
};

function mapStateToProps(state) {
  return {

  };
};

export default connect(mapStateToProps)(Homepage);
