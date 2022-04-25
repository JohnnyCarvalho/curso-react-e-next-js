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
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * Abaixo nós criamos uma constante chamada root que recebe o reactDOM, o reactDOM é uma função que recebe dois parametros, o primeiro é o elemento html que será o container do nosso app, o segundo é o componente que será renderizado que embora se pareça com um html, mais ele na verdade é um componente jsx do react.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /**
   * Abaixo nós vemos o que o componente App faz, ele é um 
   * componente que recebe um estado e um método que é o 
   * render, o render é um método que recebe um componente e 
   * retorna um elemento html, o componente que será 
   * renderizado é o App.jsx que está na pasta src.
   */
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
