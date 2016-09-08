import React from 'react';
import ModalDialog from './modal_dialog';
import ModalContent from './modal_content';

class Modal extends React.Component {
  render() {
    return (
      <div className='modal fade' role='dialog'>
        <ModalDialog>
          <ModalContent>
            {this.props.children}
          </ModalContent>
        </ModalDialog>
      </div>
    );
  }
};

export default Modal;
