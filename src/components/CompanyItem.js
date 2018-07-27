import React, { Component } from 'react';

import ListGroupItem from '../../node_modules/react-bootstrap/lib/ListGroupItem';

class CompanyItem extends Component {
  render() {
    const {idCompany, nameCompany, addressCompany, innCompany, editCompany, deleteCompany} = this.props;
    return (
      <ListGroupItem bsStyle="info">
        <h2>{nameCompany}</h2>
        <address>{addressCompany}</address>
        <div>{innCompany}</div>
        <button onClick={()  => {editCompany(idCompany)}}>Редактировать</button>
        <button onClick={()  => {deleteCompany(idCompany)}}>Удалить</button>
      </ListGroupItem>
    );
  }

}

export default CompanyItem;




