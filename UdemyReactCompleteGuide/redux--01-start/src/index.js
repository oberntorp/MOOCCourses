import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import counterReducer from './Store/Reducers/counter';
import storeReducer from './Store/Reducers/store';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
    count: counterReducer,
    result: storeReducer
})

const logger = store =>{
    return next =>{
        return action => {
            console.log("[Middleware] Dispatching", action);
            // Thisc line lets the action pass to the reducer
            const result = next(action);
            console.log("[Middleware] next state", store.getState());
            return result;
        };
    };
};


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Middlewares executed in order

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
