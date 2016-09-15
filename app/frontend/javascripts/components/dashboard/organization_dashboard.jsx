import React from 'react';
import { Component } from 'react';
import { getOrganization } from '../../actions/organization';
import { connect } from 'react-redux';
import GroupList from './organization_dashboard/group_list';

class OrganizationDashboard extends Component {
  componentDidMount() {
    this.props.dispatch(getOrganization(this.props.routeParams.id));
  }

  render() {
    return (
      <div>
        <h4>{this.props.organization.name}</h4>
        <p>{this.props.organization.description}</p>

        <div>
          <GroupList groups={this.props.groups} orgId={this.props.organization.id} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    organization: state.organization.organization,
    groups: state.organization.organization.groups || []
  };
}

export default connect(mapStateToProps)(OrganizationDashboard);
