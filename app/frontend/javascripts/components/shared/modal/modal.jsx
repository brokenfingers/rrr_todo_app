import React from 'react';
import ModalDialog from './modal_dialog';
import ModalContent from './modal_content';

export default class Modal extends React.Component {
  constructor(props) {
    super(props)
  }

  _getModalClassName() {
    return this.props.show ? 'modal fade-in' : 'modal fade';
  }

  _getModalStyle() {
    return this.props.show ? {display: 'block'} : {display: 'none'};
  }

  render() {
    return (
      <div className={this._getModalClassName()} role='dialog' style={this._getModalStyle()}>
        <ModalDialog>
          <ModalContent>
            {this.props.children}
          </ModalContent>
        </ModalDialog>
      </div>
    );
  }
};

Modal.propTypes = {
  show: React.PropTypes.bool.isRequired
}
