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
                <table className='table'>
                    <tr>
                        <th>Компания:</th>
                        <td>
                            <input  type='text'
                                    size='40'
                                    defaultValue={nameCompany}
                                    ref={(input) => { this.nameCompanyInput = input }} />
                        </td>
                    </tr>
                    <tr>
                        <th>Адрес:</th>
                        <td>
                            <input  type='text'
                                    size='40'
                                    defaultValue={addressCompany}
                                    ref={(input) => { this.addressCompanyInput = input }}/>
                        </td>
                    </tr>
                    <tr>
                        <th>ИНН:</th>
                        <td>
                            <input  type='text'
                                    size='40'
                                    defaultValue={innCompany}
                                    ref={(input) => { this.innCompanyInput = input }}/>
                        </td>
                    </tr>
                </table>
            </Modal.Body>
            <Modal.Footer>
                <Button bsStyle='success' onClick={()  => {editCompany(this.nameCompanyInput.value, this.addressCompanyInput.value, this.innCompanyInput.value)}}>Сохранить</Button>
                <Button bsStyle='info' onClick={()  => {modalClose()}}>Отмена</Button>
            </Modal.Footer>
        </Modal.Dialog> 
    );
  }


}

export default modalCompany;