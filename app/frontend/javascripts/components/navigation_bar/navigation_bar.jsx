import React from 'react';
import { toggleModal } from '../../actions/sign_up_modal';
import { connect } from 'react-redux';
import { signOutUser } from '../../actions/authentication';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSignInClick(event) {
    event.preventDefault();
    this.props.dispatch(toggleModal());
  }

  handleSignOutClick(event) {
    event.preventDefault();
    this.props.dispatch(signOutUser());
  }

  renderAuthLink() {
    if (this.props.loggedIn) {
      return <a href='#' onClick={this.handleSignOutClick.bind(this)}>Sign Out</a>;
    } else {
      return <a href='#' onClick={this.handleSignInClick.bind(this)}>Sign In</a>;
    }
  }

  render() {
    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <div className='nav navbar-collapse'>
            <ul className='nav navbar-nav navbar-right'>
              <li>
                {this.renderAuthLink()}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};

function mapStateToProps(state) {
  return {
    displayModal: state.signUpModal.displayModal,
    loggedIn: state.authentication.loggedIn
  };
};

export default connect(mapStateToProps)(NavigationBar);
