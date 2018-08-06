import React, { Component } from 'react';

import CompanyList from './components/CompanyList';
import ButtonAdd from './components/ButtonAdd';

import Label from '../node_modules/react-bootstrap/lib/Label';
import Row from '../node_modules/react-bootstrap/lib/Row';
import Col from '../node_modules/react-bootstrap/lib/Col';
import Grid from '../node_modules/react-bootstrap/lib/Grid';


class Company extends Component {
  render() {
    return (
      <Grid>
      <Row className='align-items-center'>
        <Col sm={9} md={9} lg={9}>       
          <h1>
            <span className='badge badge-info'>Компании</span>
          </h1>
        </Col>
        <Col sm={3} md={3} lg={3}> 
        <div className='float-right'>       
        <ButtonAdd buttonType='addCompany' />
        </div>
        </Col>
      </Row>
      <Row className='align-items-center'>
      <Col md={12} sm={12}>      
        <CompanyList />
        </Col>

      </Row>
      </Grid>
    );
  }
}

export default Company;