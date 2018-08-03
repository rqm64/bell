import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { HashRouter } from 'react-router-dom';


import rootReducers from './reducers/index';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducers);

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
