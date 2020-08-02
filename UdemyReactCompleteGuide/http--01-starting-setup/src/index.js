import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// Set default url, common headers, headers for posts of specific type
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
//axios.defaults.headers.common["Authorization"] = "Auth Token";
axios.defaults.headers.post["Content-Type"] = "application/json";

// Interceptors.request is used to let axios manipulate the request (ie setting headers for authrization)
axios.interceptors.request.use(request => {
    console.log(request);
    return request; // < -- Return is needed, otherwise the request is blocked from execusion
}, error => {
    console.log(error);
    return Promise.reject(error); // < -- Return is needed, otherwise the error is blocked from being handled
});

// Interceptors.response can be used to manipulate or show an error for a response
axios.interceptors.response.use(response => {
    console.log(response);
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});
ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
