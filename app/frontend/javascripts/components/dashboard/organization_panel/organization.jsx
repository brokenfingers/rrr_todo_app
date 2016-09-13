import React from 'react';
import { Component } from 'react';

class Organization extends Component {
  render() {
    return (
      <div>
        <p>{this.props.data.name}</p>
        <p>{this.props.data.description}</p>
      </div>
    );
  }
}

Organization.propTypes = {
  data: React.PropTypes.object.isRequired
}

export default Organization;
