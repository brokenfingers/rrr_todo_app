import React from 'react';
import { Component } from 'react';

class Organization extends Component {
  render() {
    return (
      <div className='organization-box'>
        <img className='organization-img' src='https://placeholdit.imgix.net/~text?txtsize=22&txt=Organization&w=350&h=150'/>
        <div className='organization-box-details'>
          <p>{this.props.data.name}</p>
          <p>{this.props.data.description}</p>
        </div>
      </div>
    );
  }
}

Organization.propTypes = {
  data: React.PropTypes.object.isRequired
}

export default Organization;
