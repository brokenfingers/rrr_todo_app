import React from 'react';
import { Component } from 'react';
import Group from './group';

class GroupList extends Component {
  renderGroups() {
    let groupList = [];

    this.props.groups.forEach((group) => {
      groupList.push(
        <Group key={group.id} data={group} />
      );
    });

    groupList.push(
      <div key='placeholder-group' className='group-box col-xs-3'>
        <a href='#' onClick={this.props.handleToggleGroupModal}>+ Add Group</a>
      </div>
    );

    return groupList;
  }

  render() {
    return (
      <div className='row'>
        <div className='col-xs-12'>
          <p>{this.props.title}</p>
        </div>
        <div className='col-xs-12 group-list'>
          {this.renderGroups()}
        </div>
      </div>
    )
  }
}

GroupList.propTypes = {
  groups: React.PropTypes.array.isRequired,
  handleToggleGroupModal: React.PropTypes.func
}

export default GroupList;
