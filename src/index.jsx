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
import reportWebVitals from './reportWebVitals';
//import {App, App} from './Pages/001-App';
//import { ArrayStates } from './Pages/002-ArrayStates';
import { LifeCircle, LifeCircle2 } from './Pages/003-LifeCircle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LifeCircle />
    <LifeCircle2 />
  </React.StrictMode>
);

reportWebVitals();
