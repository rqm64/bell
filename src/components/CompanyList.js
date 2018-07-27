import React, { Component } from 'react';
import ListGroup from '../../node_modules/react-bootstrap/lib/ListGroup';
import CompanyItem from './CompanyItem';
import { connect } from 'react-redux';


class CompanyList extends Component {
    
    constructor(props) {
        super(props);

        this.editCompany=this.editCompany.bind(this);
        this.deleteCompany=this.deleteCompany.bind(this);
    }


    render() {
        return (
            <ListGroup>
                {this.props.company.map(company => {
                    return (
                        <CompanyItem 
                            key={company.idCompany}
                            idCompany={company.idCompany} 
                            nameCompany={company.nameCompany}
                            addressCompany={company.addressCompany}
                            innCompany={company.innCompany}
                            editCompany={this.editCompany}
                            deleteCompany={this.deleteCompany}
                        />
                    )
                })}
            </ListGroup>
            
        );
    }
    

    editCompany(idCompany) {        
        this.props.action('company', idCompany);    
    }

    deleteCompany(idCompany) {
        
        this.props.action('deleteCompany', idCompany); 
    }

}

export default connect(
    state => ({
        company: state.company,
        modal: state.modal
    }),
    dispatch => ({
        action: (modalType, id) => {
          dispatch({ type: 'MODAL_OPEN', modalType: modalType, id: id});
        }
    })
)(CompanyList);;