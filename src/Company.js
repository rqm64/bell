import React, { Component } from 'react';

import CompanyList from './components/CompanyList';
import ButtonAdd from './components/ButtonAdd';

class Company extends Component {
  render() {
    return (
      <div>        
        <h1>Компании</h1>
        <ButtonAdd buttonType='addCompany' />     
        <CompanyList />
      </div>
    );
  }
}

export default Company;