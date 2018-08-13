const initialState = [
    {
        idCompany: 0,
        nameCompany: 'Microsoft',
        addressCompany: 'address',
        innCompany: 12314124124
    },
    {
        idCompany: 1,
        nameCompany: 'Google',
        addressCompany: 'address2',
        innCompany: 666
    },
    {
        idCompany: 2,
        nameCompany: 'Apple',
        addressCompany: 'address3',
        innCompany: 945680945860984758
        }
];

export default function isCompany(state = [], action) {
    switch (action.type) {
        case 'ADD_COMPANY' : {
            return [
                ...state, {
                    idCompany: state[state.length-1].idCompany + 1,
                    nameCompany: action.nameCompany,
                    addressCompany: action.addressCompany,
                    innCompany: action.innCompany
                }              
                
            ];
        }

        case 'DELETE_COMPANY' : {
            const idx = state.findIndex(item => item.idCompany === action.id);
            state.splice(idx, 1);
            return [...state];  
        }

        case 'EDIT_COMPANY' : {
            const idx = state.findIndex(item => item.idCompany === action.idCompany);
            state[idx] = {
                    idCompany: action.idCompany,
                    nameCompany: action.nameCompany,
                    addressCompany: action.addressCompany,
                    innCompany: action.innCompany    
            };
            return [...state];  
        }

        case 'SET_STATE' : {
            state = action.response;
            return [...state];  
        }
    
        default : return state; 
    }   
}
