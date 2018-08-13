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

    componentDidMount() {
        this.props.loadData();
    }

}

export default connect(
    state => ({
        company: state.company
    }),
    dispatch => ({
        action: (modalType, id) => {
          dispatch({ type: 'MODAL_OPEN', modalType: modalType, id: id});
        },
        loadData: () => {
            new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest();
                xhr.open('GET', "http://www.mocky.io/v2/5b71d8333200005500f36ff3", true);
                xhr.onload = function() {
                    if(xhr.status == 200){
                        resolve(xhr.response);
                    } else {
                        reject(new Error("Error onload"));
                    }
                };
                xhr.onerror = function() {
                    reject(new Error("Error onerror"));
                }
                xhr.send();
            })
            .then(response => {
                let result = JSON.parse(response);
                return result;             
            })
            .then(response => {
                dispatch({ type: 'SET_STATE', response: response})
            })
        }
    })
)(CompanyList);;