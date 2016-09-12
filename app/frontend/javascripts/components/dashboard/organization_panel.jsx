import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { getOrganizations } from '../../actions/organization';

class OrganizationPanel extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(getOrganizations());
  }

  render() {
    return <p>Organizations</p>
  }
}

function mapStateToProps(state) {
  return {
    organizations: state.organization.organizations
  };
}

export default connect(mapStateToProps)(OrganizationPanel);
