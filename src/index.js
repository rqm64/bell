import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';

import rootReducers from './reducers/index';
import App from './App';
import Company from './Company';
import CompanyUnit from './CompanyUnit';
import LoginForm from './components/LoginForm';

const history = createBrowserHistory();

const store = createStore(
    connectRouter(history)(rootReducers), 
    compose(
      applyMiddleware(
        routerMiddleware(history), 
      ),
    ),
)

ReactDOM.render(
    <Provider store={store}>
        <App>
            <ConnectedRouter history={history}>           
                <Switch>
                    <Route exact path='/' component={Company}/>
                    <Route path='/loginform' component={LoginForm}/>
                    <Route path='/company/:idCompany' component={CompanyUnit}/>
                </Switch>                                 
            </ConnectedRouter>
        </App>
    </Provider>,
    document.getElementById('root')
);
