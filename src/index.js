import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import './style/responsive.css'
import Main from './Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

