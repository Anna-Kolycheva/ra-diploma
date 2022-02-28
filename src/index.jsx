import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import axios from 'axios';
import './index.css';
import App from './App';
import store from './store/store';

// axios.defaults.headers.common.Accept = 'Access-Control-Allow-Origin';

ReactDOM.render(
   <React.StrictMode>
      <Provider store={store}>
         <App />
      </Provider>
   </React.StrictMode>,
   document.getElementById('root')
);
