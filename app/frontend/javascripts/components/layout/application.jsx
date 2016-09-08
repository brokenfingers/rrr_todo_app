import React from 'react';
import NavigationBar from '../navigation_bar/navigation_bar';
import { connect } from 'react-redux';
import SignUpModal from '../modals/sign_up_modal';

class Application extends React.Component {
  // This state should probably live in the store
  constructor(props) {
    super(props);

    this.state = {
      displayModal: false
    };
  }

  handleSignInClick(event) {
    event.preventDefault();
    this.setState({displayModal: true});
  }

  render() {
    return (
      <div>
        <NavigationBar handleSignInClick={this.handleSignInClick.bind(this)}/>
        <SignUpModal displayModal={this.state.displayModal} />
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
