import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducers from './reducers/index';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
