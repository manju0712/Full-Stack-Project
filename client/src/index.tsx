import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios'

axios.interceptors.request.use(request => {
  const token = localStorage.getItem('access_token')

  if (token) {
    request.headers = {
      Authorization: `Bearer ${token}`,
    }
  }

  return request
})

axios.defaults.baseURL = 'http://localhost:3000/api'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
