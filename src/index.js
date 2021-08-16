import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
//StricMode es una herramienta que permite destacar problema spotenciales de la aplicacion
//No renderiza nada en la interfaz de usuario, es un modo que tambien activa advertencias
//y comprobaciones adiccionales para los objetos que esten dentro de stricmode
//

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
