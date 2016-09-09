import React from 'react';
import { toggleModal } from '../../actions/sign_up_modal';
import { connect } from 'react-redux';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSignInClick(event) {
    event.preventDefault();
    this.props.dispatch(toggleModal());
  }

  render() {
    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <div className='nav navbar-collapse'>
            <ul className='nav navbar-nav navbar-right'>
              <li>
                <a href='#' onClick={this.handleSignInClick.bind(this)}>Sign In</a>
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
    displayModal: state.signUpModal.displayModal
  };
};

export default connect(mapStateToProps)(NavigationBar);
