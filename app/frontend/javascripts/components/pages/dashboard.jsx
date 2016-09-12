import React from 'react';
import { Component } from 'react';
import ApplicationLayout from '../layout/application_layout';

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ApplicationLayout>
        <div className='row'>
          <div className='col-xs-2'>
            {/* This will render sidebar with Links to other panels */}
            This is the sidebar
          </div>
          <div className='col-xs-10'>
            {this.props.children}
          </div>
        </div>
      </ApplicationLayout>
    );
  }
}
