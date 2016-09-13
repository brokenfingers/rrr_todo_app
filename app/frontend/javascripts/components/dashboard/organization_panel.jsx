import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { getOrganizations } from '../../actions/organization';
import { toggleModal } from '../../actions/organization_modal';

import OrganizationList from './organization_panel/organization_list';

class OrganizationPanel extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(getOrganizations());
  }

  handleToggleOrgModal(event) {
    event.preventDefault();
    this.props.dispatch(toggleModal());
  }

  renderOrganizationsLists() {
    let organizationsList = [];

    organizationsList.push(
      <OrganizationList
        title='Your organizations'
        organizations={this.props.owned_organizations}
        displayPlaceholder={true}
        key={'owned-organizations-list'}
        handleToggleOrgModal={this.handleToggleOrgModal.bind(this)}
      />
    );

    if (this.props.joined_organizations.length > 0) {
      organizationsList.push(
        <OrganizationList
          title='Organizations you belong to'
          organizations={this.props.joined_organizations}
          displayPlaceholder={true}
          key={'joined-organizations-list'}
        />
      );
    }

    return organizationsList;
  }

  render() {
    return (
      <div>
        {this.renderOrganizationsLists()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    owned_organizations: state.organization.owned_organizations,
    joined_organizations: state.organization.joined_organizations
  };
}

export default connect(mapStateToProps)(OrganizationPanel);
