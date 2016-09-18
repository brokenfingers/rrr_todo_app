import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

class Group extends Component {
  render() {
    return (
      <Link to={''}>
        <div className='group-box'>
          <img className='group-img' src='https://placeholdit.imgix.net/~text?txtsize=22&txt=Group&w=350&h=150'/>
          <div className='group-box-details'>
            <p>{this.props.data.name}</p>
            <p>{this.props.data.description}</p>
          </div>
        </div>
      </Link>
    );
  }
}

Group.propTypes = {
  data: React.PropTypes.object.isRequired
}

export default Group;
