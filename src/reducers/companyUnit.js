const initialState = [
    {
        idCompanyUnit: 0,
        idCompany:0,
        nameCompanyUnit: 'Microsoft-1',
        phoneCompanyUnit: 68-55-99
    },
    {
        idCompanyUnit: 1,
        idCompany:0,
        nameCompanyUnit: 'Microsoft-2',
        phoneCompanyUnit: 68-55-99
    },
    {
        idCompanyUnit: 2,
        idCompany:1,
        nameCompanyUnit: 'Google-1',
        phoneCompanyUnit: 68-55-99
    },
    {
        idCompanyUnit: 3,
        idCompany:1,
        nameCompanyUnit: 'Google-2',
        phoneCompanyUnit: 68-55-99
    },
    {
        idCompanyUnit: 4,
        idCompany:2,
        nameCompanyUnit: 'Apple-1',
        phoneCompanyUnit: 68-55-99
    },
    {
        idCompanyUnit: 5,
        idCompany:2,
        nameCompanyUnit: 'Apple-2',
        phoneCompanyUnit: 68-55-99
    },
];

export default function isCompanyUnit(state = initialState, action) {
    switch (action.type) {
        case 'ADD_COMPANY_UNIT' : {
            return [
                ...state, {
                    idCompany: state[state.length-1].idCompany + 1,
                    nameCompany: action.nameCompany,
                    addressCompany: action.addressCompany,
                    innCompany: action.innCompany
                }              
                
            ];
        }

        case 'DELETE_COMPANY_UNIT' : {
            const idx = state.findIndex(item => item.idCompany === action.id);
            state.splice(idx, 1);
            return [...state];  
        }

        case 'EDIT_COMPANY_UNIT' : {
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