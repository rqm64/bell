import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import rootReducers from './reducers/index';
import App from './App';
import Company from './Company';
import CompanyUnit from './CompanyUnit';
import LoginForm from './components/LoginForm';



const store = createStore(rootReducers);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route exact path='/' component={Company}/>
                    <Route path='/loginform' component={LoginForm}/>
                    <Route path='/company/:idCompany' component={CompanyUnit}/>
                </Switch>
            </App>                
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
