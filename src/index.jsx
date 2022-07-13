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

//import {App, App} from './Pages/001-App';
//import { ArrayStates } from './Pages/002-ArrayStates';
//import { LifeCircle, LifeCircle2 } from './Pages/003-LifeCircle';
//import { BuscandoDadosExternos } from './Pages/004-BuscandoDadosExternos';
//import { OrganizacaoDosComponentes1 } from './Pages/005-PrompsEOrganizacaoDosComponentes_parte_1';
//import { OrganizacaoDosComponentes2 } from './Pages/006-PropsEOrganizacaoDosComponentes_parte_2';
import { InputDeTexto } from './Pages/007-inputsDeTexto';
//import { Home } from './Pages/008-MigrandoParaReactHooks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < InputDeTexto />
  </React.StrictMode>
);
