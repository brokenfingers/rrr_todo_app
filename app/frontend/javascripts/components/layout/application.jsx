import React from 'react';
import NavigationBar from '../navigation_bar/navigation_bar';
import { connect } from 'react-redux';
import SignUpModal from '../modals/sign_up_modal';
import { verifySession } from '../../actions/authentication';

class Application extends React.Component {
  componentDidMount() {
    this.props.dispatch(verifySession());
  }

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
