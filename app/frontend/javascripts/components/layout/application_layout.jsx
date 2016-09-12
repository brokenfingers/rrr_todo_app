import React from 'react';
import NavigationBar from '../navigation_bar/navigation_bar';
import { connect } from 'react-redux';
import { verifySession } from '../../actions/authentication';

class ApplicationLayout extends React.Component {
  componentDidMount() {
    this.props.dispatch(verifySession());
  }

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

export default connect(mapStateToProps)(ApplicationLayout);
