import React from 'react';
import { Component } from 'react';
import Organization from './organization';

class OrganizationList extends Component {
  renderOrganizations() {
    let organizationList = [];

    this.props.organizations.forEach((organization) => {
      organizationList.push(
        <Organization key={organization.id} data={organization} />
      );
    });

    if (this.props.displayPlaceholder) {
      organizationList.push(
        <div key='placeholder-organization'>
          <a href='#' onClick={this.props.handleToggleOrgModal}>Org</a>
        </div>
      );
    }

    return organizationList;
  }

  render() {
    return (
      <div className='row'>
        <div className='row'>
          <p>{this.props.title}</p>
        </div>
        <div className='row'>
          {this.renderOrganizations()}
        </div>
      </div>
    )
  }
}

OrganizationList.propTypes = {
  title: React.PropTypes.string.isRequired,
  organizations: React.PropTypes.array.isRequired,
  displayPlaceholder: React.PropTypes.bool.isRequired,
  handleToggleOrgModal: React.PropTypes.func
}

export default OrganizationList;
