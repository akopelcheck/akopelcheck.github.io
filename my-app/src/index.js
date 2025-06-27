import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home-page/home-page'
import 'bootstrap/dist/css/bootstrap.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

