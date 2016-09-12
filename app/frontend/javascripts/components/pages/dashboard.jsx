import React from 'react';
import { Component } from 'react';

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-xs-2'>
            {/* This will render sidebar with Links to other panels */}
            This is the sidebar
          </div>
          <div className='col-xs-10'>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
