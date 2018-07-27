import { combineReducers } from 'redux';
import loginForm from './loginForm';
import company from './company';
import modal from './modal';



export default combineReducers({
    loginForm,
    company,
    modal  
});