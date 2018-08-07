import React, { Component } from 'react';

import Modal from '../../node_modules/react-bootstrap/lib/Modal';
import Button from '../../node_modules/react-bootstrap/lib/Button';


class modalAddCompany extends Component {
  render() {
    const { modalClose, addСompany } = this.props;
    return (
        <Modal.Dialog backdrop={true}>
            <Modal.Header>
                <Modal.Title>Добавить новую компанию.</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <table className='table'>
                    <tr>
                        <th>Компания:</th>
                        <td className='w-75'>
                            <input  type='text'
                            size='40'
                            placeholder='Введите название'
                            ref={(input) => { this.nameCompanyInput = input }} /></td>
                    </tr>
                    <tr>
                        <th>Адрес:</th>
                        <td className='w-75'>
                            <input  type='text'
                            size='40'
                            placeholder='Введите адрес'
                            ref={(input) => { this.addressCompanyInput = input }}/></td>
                    </tr>
                    <tr>
                        <th>ИНН:</th>
                        <td className='w-75'>
                            <input  type='text'
                            size='40'
                            placeholder='Введите ИНН'
                            ref={(input) => { this.innCompanyInput = input }}/></td>
                    </tr>
                </table>                     
            </Modal.Body>          
            <Modal.Footer>
                <Button bsStyle='success' onClick={()  => {addСompany(this.nameCompanyInput.value, this.addressCompanyInput.value, this.innCompanyInput.value)}}>Добавить</Button>
                <Button bsStyle='info' onClick={()  => {modalClose()}}>Отмена</Button>
            </Modal.Footer>
        </Modal.Dialog> 
    );

  }


}

export default modalAddCompany;