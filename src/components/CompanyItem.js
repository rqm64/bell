import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ListGroupItem from '../../node_modules/react-bootstrap/lib/ListGroupItem';
import Grid from '../../node_modules/react-bootstrap/lib/Grid';
import Row from '../../node_modules/react-bootstrap/lib/Row';
import Col from '../../node_modules/react-bootstrap/lib/Col';
import Button from '../../node_modules/react-bootstrap/lib/Button';
import ButtonGroup from '../../node_modules/react-bootstrap/lib/ButtonGroup';
import ButtonToolbar from '../../node_modules/react-bootstrap/lib/ButtonGroup';



class CompanyItem extends Component {
  render() {
    const {idCompany, nameCompany, addressCompany, innCompany, editCompany, deleteCompany} = this.props;
    return (
      <ListGroupItem>
        <table className='table'>
          <tr>
            <td colspan="2">
              <h2>
                <Link to={`/company/${idCompany}`} className='text-info'>
                  {nameCompany}
                </Link>
              </h2>
            </td>
            <td>
              <div className='float-right'>
                <ButtonToolbar>
                  <Button bsSize="small" bsStyle="info" onClick={()  => {editCompany(idCompany)}}>Редактировать</Button>
                  <Button bsSize="small" bsStyle="secondary" onClick={()  => {deleteCompany(idCompany)}}>Удалить</Button>
                </ButtonToolbar> 
              </div>
            </td>
          </tr>
          <tr>
            <th scope='row' >Адрес:</th>
            <td className='w-50'>{addressCompany}</td>
            <td></td>
          </tr>
          <tr>
            <th scope='row' >ИНН:</th>
            <td className='w-50'>{innCompany}</td>
            <td></td>
          </tr>           
        </table>

        {/* <Grid>
          <Row>
            <Col sm={10} md={10} lg={10}>
              <h2>
                <Link to={`/company/${idCompany}`} className='text-info'>
                  {nameCompany}
                </Link>
              </h2>
              <address>Адрес: {addressCompany}</address>
              <div>ИНН: {innCompany}</div>
            </Col>
            <Col sm={2} md={2} lg={2}>
              <div className='float-right'>
              <ButtonToolbar>
                  <Button bsSize="small" bsStyle="info" onClick={()  => {editCompany(idCompany)}}>Редактировать</Button>
                  <Button bsSize="small" bsStyle="secondary" onClick={()  => {deleteCompany(idCompany)}}>Удалить</Button>
                  </ButtonToolbar> 
              </div>
            </Col>
          </Row>
        </Grid> */}
      </ListGroupItem>
    );
  }

}

export default CompanyItem;




