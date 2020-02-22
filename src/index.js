import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import appStore from './store/reducers';

import './scss/index.scss';

import App from './App';

const store = createStore( appStore, applyMiddleware(thunk) );

ReactDOM.render(
    <Provider store={ store } >
        <App />
    </Provider>, document.getElementById('root')
);