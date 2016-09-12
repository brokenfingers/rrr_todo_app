import React from 'react';
import NavigationBar from '../navigation_bar/navigation_bar';
import { connect } from 'react-redux';
import { verifySession } from '../../actions/authentication';

class ApplicationLayout extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.context.router.push('/dashboard');
    } else {
      this.context.router.push('/');
    }
  }

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
    loggedIn: state.authentication.loggedIn
  };
};

ApplicationLayout.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps)(ApplicationLayout);
