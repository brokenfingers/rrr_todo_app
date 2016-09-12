import React from 'react';
import { Component } from 'react';

class OrganizationList extends Component {
  renderOrganizations() {
    return null;
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
  displayPlaceholder: React.PropTypes.bool.isRequired
}

export default OrganizationList;
