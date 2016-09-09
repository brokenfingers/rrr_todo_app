import React from 'react';
import NavigationBar from '../navigation_bar/navigation_bar';
import { connect } from 'react-redux';
import SignUpModal from '../modals/sign_up_modal';

class Application extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <SignUpModal />
        {this.props.children}
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {

  };
};

export default connect(mapStateToProps)(Application);
