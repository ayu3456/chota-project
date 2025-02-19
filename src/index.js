import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/main.css';
import App from './App';
import 'primereact/resources/themes/saga-orange/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
