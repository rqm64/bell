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

export default function isCompany(state = initialState, action) {
    switch (action.type) {
        case 'ADD_COMPANY' : {
            return [
                ...state, {
                    idCompany: 3,
                    nameCompany: 'Yokki',
                    addressCompany: 'Japan',
                    innCompany: 999555586767565
                }              
                
            ];
        }

        case 'DELETE_COMPANY' : {
            return {
                ...state,
                isLogin: false,
                loginName: ''
            };
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
    
        default : return state; 
    }   
}
