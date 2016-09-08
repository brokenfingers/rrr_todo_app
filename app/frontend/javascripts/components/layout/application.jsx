import React from 'react';
import NavigationBar from '../navigation_bar/navigation_bar';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authentication'

class Application extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(registerUser('hyunsikk91@gmail.com', 'password'));
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='email'></input>
          <input type='password'></input>
          <button type='submit'>Submit</button>
        </form>
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
