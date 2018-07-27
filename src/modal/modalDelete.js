import React, { Component } from 'react';

import Modal from '../../node_modules/react-bootstrap/lib/Modal';
import Button from '../../node_modules/react-bootstrap/lib/Button';


class modalCompany extends Component {
  render() {
    const { modalClose, deleteObject, nameCompany } = this.props;
    return (
        <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>Удалить {nameCompany}?</Modal.Title>
            </Modal.Header>           
            <Modal.Footer>
                <Button onClick={()  => {deleteObject()}}>Да</Button>
                <Button bsStyle="primary" onClick={()  => {modalClose()}}>Нет</Button>
            </Modal.Footer>
        </Modal.Dialog> 
    );
  }


}

export default modalCompany;