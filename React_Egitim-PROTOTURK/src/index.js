import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './style.css'
import { RouterContext } from './Context/RouterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <RouterContext>

      <App />

    </RouterContext>
  </BrowserRouter >
);
