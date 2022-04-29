/**
 * @author Johnny Carvalho
 * @date   2022-04-25
 * 
 * Esse é o primeiro script que será executado, abaixo nós 
 * vemos o que ele faz. Primeiro ele importa as dependências 
 * que será utilizada na compilação do código, em seguida nós 
 * vemos a criação de uma constante chamada root que recebe o 
 * elemento html que será o container do nosso app.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
//import {App, App} from './Pages/App';
import { ArrayStates } from './Pages/ArrayStates';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ArrayStates />
  </React.StrictMode>
);

reportWebVitals();
