import React, { Component } from 'react';

import Modal from '../../node_modules/react-bootstrap/lib/Modal';
import Button from '../../node_modules/react-bootstrap/lib/Button';


class modalCompany extends Component {
  render() {
    const { modalClose, editCompany, nameCompany, addressCompany, innCompany } = this.props;
    return (
        <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>Редактировать {nameCompany}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    Компания:
                    <input  type='text'
                            defaultValue={nameCompany}
                            ref={(input) => { this.nameCompanyInput = input }} />
                </div>
                <div>
                    Адрес:
                    <input  type='text'
                            defaultValue={addressCompany}
                            ref={(input) => { this.addressCompanyInput = input }}/>
                </div>
                <div>
                    ИНН:
                    <input  type='text'
                            defaultValue={innCompany}
                            ref={(input) => { this.innCompanyInput = input }}/>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()  => {editCompany(this.nameCompanyInput.value, this.addressCompanyInput.value, this.innCompanyInput.value)}}>Сохранить</Button>
                <Button bsStyle="primary" onClick={()  => {modalClose()}}>Отмена</Button>
            </Modal.Footer>
        </Modal.Dialog> 
    );
  }


}

export default modalCompany;