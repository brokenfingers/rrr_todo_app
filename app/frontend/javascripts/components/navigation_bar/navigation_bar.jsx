import React from 'react';

class NavigationBar extends React.Component {
  render() {
    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <div className='nav navbar-collapse'>
            <ul className='nav navbar-nav navbar-right'>
              <li>
                <a href='#' onClick={this.props.handleSignInClick}>Sign In</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};

export default NavigationBar;
