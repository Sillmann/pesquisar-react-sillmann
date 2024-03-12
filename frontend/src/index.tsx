import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Listar from './Listar';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Listar />
  </React.StrictMode>
);

