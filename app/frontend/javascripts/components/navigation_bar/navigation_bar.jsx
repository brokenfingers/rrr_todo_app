import React from 'react';

class NavigationBar extends React.Component {
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

  renderSignInModal() {
    if (this.state.displayModal) {
      alert('Display Modal');
    }
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
        {this.renderSignInModal()}
      </nav>
    );
  }
};

export default NavigationBar;
