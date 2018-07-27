const initialState = {
    isLogin: false,
    loginName: ''
};

export default function isLogin(state = initialState, action) {
    switch (action.type) {
        case 'LOG_IN' : {
            return {
                ...state,
                isLogin: true,
                loginName: action.logName
            };
        }

        case 'LOG_OUT' : {
            return {
                ...state,
                isLogin: false,
                loginName: ''
            };
        }
    
        default : return state; 
    }   
}

