import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import configureStore from './hooks-store/product-store';

configureStore();
ReactDOM.render(
  
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);
