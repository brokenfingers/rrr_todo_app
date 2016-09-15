import React from 'react';
import { Component } from 'react';
import { getOrganization } from '../../actions/organization';
import { connect } from 'react-redux';

class OrganizationDashboard extends Component {
  componentDidMount() {
    this.props.dispatch(getOrganization(this.props.routeParams.id));
  }

  render() {
    return (
      <div>
        <h4>{this.props.organization.name}</h4>
        <p>{this.props.organization.description}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    organization: state.organization.organization
  };
}

export default connect(mapStateToProps)(OrganizationDashboard);
