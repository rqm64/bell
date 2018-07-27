const initialState = {
    modalVisible: false,
    modalType: '',
    id: ''
    
};

export default function modalVisible(state = initialState, action) {
    switch (action.type) {
        case 'MODAL_OPEN' : {
            return {
                ...state,
                modalVisible: true,
                modalType: action.modalType,
                id: action.id
            };
        }

        case 'MODAL_CLOSE' : {
            return {
                ...state,
                modalVisible: false,
                modalType: '',
                id: ''
            };
        }
    
        default : return state; 
    }   
}

