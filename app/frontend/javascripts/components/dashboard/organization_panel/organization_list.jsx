import React from 'react';
import { Component } from 'react';
import Organization from './organization';

class OrganizationList extends Component {
  renderOrganizations() {
    return this.props.organizations.map((organization) => {
      return <Organization key={organization.id} data={organization} />;
    });
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
        {/* Move to a div inside the renderOrganization */}
        <a href='#' onClick={this.props.handleToggleOrgModal}>Org</a>
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
