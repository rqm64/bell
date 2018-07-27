import React, { Component } from 'react';
import { connect } from 'react-redux';

import ModalCompany from '../modal/modalCompany';
import ModalDelete from '../modal/modalDelete';

class ModalWindow extends Component {

    constructor(props) {
        super(props);

        this.modalClose=this.modalClose.bind(this);
        this.companyEdit=this.companyEdit.bind(this);
        this.deleteObject=this.deleteObject.bind(this);

    }

    

    render() {

        const {modalVisible, modalType, id} = this.props.modal;
        
        if(!modalVisible) return null;

        let companyFilter = this.props.company.find(company => {                
            return company.idCompany === id;
        });

        switch (modalType) {
            case 'deleteCompany': {
                return (
                    <div>
                        <ModalDelete 
                            modalClose={this.modalClose}
                            deleteObject={this.deleteObject}
                            nameCompany={companyFilter.nameCompany}
                        />
                    </div>
                );
            }
            case 'company' : {
                
                return  (
                    <div className="static-modal">
                        <ModalCompany 
                            modalClose={this.modalClose}
                            companyEdit={this.companyEdit}
                            nameCompany={companyFilter.nameCompany}
                            addressCompany={companyFilter.addressCompany}
                            innCompany={companyFilter.innCompany}
                        />
                    </div>
                );
            }        
        }   
    }



    modalClose() {
        this.props.modalClose();
    }

    companyEdit(name, address, inn) {
        const {id} = this.props.modal;
        this.props.companyEdit(id, name, address, inn);
        this.props.modalClose();
    }

    deleteObject() {
        const {modalType, id} = this.props.modal;
        switch(modalType) {
            case 'deleteCompany' : {
                return (this.props.deleteObject('DELETE_COMPANY', id));
            }
        }

    }


}

export default connect(
    state => ({
      modal: state.modal,
      company: state.company
    }),
    dispatch => ({
      modalClose: () => {
        dispatch({ type: 'MODAL_CLOSE' });
      },
      companyEdit: (id, name, address, inn) => {
        dispatch({ type: 'EDIT_COMPANY', idCompany: id, nameCompany: name, addressCompany: address, innCompany: inn });
      },
      deleteObject: (type, id ) => {
        dispatch({ type: type, id: id});
      },

    })
  )(ModalWindow);;
  