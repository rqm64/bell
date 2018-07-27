import React, { Component } from 'react';
import CompanyList from './components/CompanyList';

class Company extends Component {
  render() {
    return (
      <div>        
        <h1>Компании</h1>        
        <CompanyList />
      </div>
    );
  }
}

export default Company;