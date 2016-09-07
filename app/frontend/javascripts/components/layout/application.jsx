import React from 'react';
import NavigationBar from '../navigation_bar/navigation_bar';
import { connect } from 'react-redux';

class Application extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
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
