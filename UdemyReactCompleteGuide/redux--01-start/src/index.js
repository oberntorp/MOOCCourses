import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import counterReducer from './Store/Reducers/counter';
import storeReducer from './Store/Reducers/store';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
    count: counterReducer,
    result: storeReducer
})

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
