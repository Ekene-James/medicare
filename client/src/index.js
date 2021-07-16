import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SupportContextProvider from './store/support/SupportStore'
import AuthContextProvider from './store/auth/AuthStore'

ReactDOM.render(
  <AuthContextProvider>
  <SupportContextProvider>
    <App />
  </SupportContextProvider>
  </AuthContextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
