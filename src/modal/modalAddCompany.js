import React, { Component } from 'react';

import Modal from '../../node_modules/react-bootstrap/lib/Modal';
import Button from '../../node_modules/react-bootstrap/lib/Button';


class modalAddCompany extends Component {
  render() {
    const { modalClose, addСompany } = this.props;
    return (
        <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>Добавить новую компанию.</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    Компания:
                    <input  type='text'
                            placeholder='Введите название'
                            ref={(input) => { this.nameCompanyInput = input }} />
                </div>
                <div>
                    Адрес:
                    <input  type='text'
                            placeholder='Введите адрес'
                            ref={(input) => { this.addressCompanyInput = input }}/>
                </div>
                <div>
                    ИНН:
                    <input  type='text'
                            placeholder='Введите ИНН'
                            ref={(input) => { this.innCompanyInput = input }}/>
                </div>                          
            </Modal.Body>          
            <Modal.Footer>
                <Button onClick={()  => {addСompany(this.nameCompanyInput.value, this.addressCompanyInput.value, this.innCompanyInput.value)}}>Добавить</Button>
                <Button bsStyle="primary" onClick={()  => {modalClose()}}>Отмена</Button>
            </Modal.Footer>
        </Modal.Dialog> 
    );

  }


}

export default modalAddCompany;