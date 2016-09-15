import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import SignUpModal from '../modals/sign_up_modal'

class Homepage extends Component {
  render() {
    return (
      <div>
        <SignUpModal />
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {

  };
};

export default connect(mapStateToProps)(Homepage);
