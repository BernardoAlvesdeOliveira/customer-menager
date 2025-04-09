// apps/frontend/src/assests/js/main.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from '../../router/router.jsx';
import '../../assets/css/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
