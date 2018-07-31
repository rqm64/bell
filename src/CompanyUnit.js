import React, { Component } from 'react';
import CompanyUnitList from './components/CompanyUnitList';

class Company extends Component {
  render() {
    return (
      <div>        
        <h1>Компании</h1>        
        <CompanyUnitList />
      </div>
    );
  }
}

export default Company;