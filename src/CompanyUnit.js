import React, { Component } from 'react';
import CompanyUnitList from './components/CompanyUnitList';

class CompanyUnit extends Component {
  render() {
    return (
      <div>        
        <h1>Подразделение компании</h1>        
        <CompanyUnitList idCompany={this.props.params.idCompany}/>        
      </div>
    );
  }
}

export default CompanyUnit;