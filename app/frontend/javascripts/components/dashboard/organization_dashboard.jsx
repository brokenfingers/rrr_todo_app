import React from 'react';
import { Component } from 'react';
import { getOrganization } from '../../actions/organization';
import { connect } from 'react-redux';

class OrganizationDashboard extends Component {
  componentDidMount() {
    this.props.dispatch(getOrganization(this.props.routeParams.id));
  }

  render() {
    return <p>Why I am being redirected on refresh</p>
  }
}

function mapStateToProps(state) {
  return {
    organization: state.organization.organization
  };
}

export default connect(mapStateToProps)(OrganizationDashboard);
