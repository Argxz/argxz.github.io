import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
const myUrl = '/argxz.github.io'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename={`${myUrl}`}>
      <App />
    </Router>
  </React.StrictMode>
);