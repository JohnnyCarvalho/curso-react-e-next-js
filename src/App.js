/**
 * @author Johnny Carvalho
 * @date   2022-04-25
 * 
 * Primeiramente nós importamos algumas funcionalidades que serão exibidas ou utilizadas em nossa aplicação. 
 */
import logo from './logo.svg';
import './App.css';

/**
 * Abaixo nós criamos uma função chamado App,vale fazer uma 
 * observação, em react toda vez que criamos um componente, ele 
 * precisa ser exportado, ou seja, nós precisamos exportar o 
 * componente para que ele seja utilizado em outro arquivo, 
 * essa exportação é feita utilizando o comando export default. 
 * Também é de caractere obrigatório que seu nome se inicie com 
 * letra maíuscula.
 * Em Java Script as classes também se iniciam com letras 
 * maiúsculas, porém, em React, toda vez que nos depararmos com 
 * um componente, veremos que ele terá o nome em letra 
 * minúscula.
 */

function App() {
  return (
    /**
     * Nota que essa função retorna HTML, ou seja, aqui vemos 
     * na prática o jsx em uso, que nada mais é do que Java 
     * Script com arquivo xml tudo junto e misturado
     * 
     * @obsevation O React não é uma linguagem de programação, más ele é uma biblioteca que permite a criação de aplicações web usando uma linguagem de programação JavaScript, toda vez que utilizamos java script dentro do arquivo html em react, temos que colocar o código dentro de chaves, como podemos ver abaixo a tag img que está utilizando a variável { logo }, também vale pontuar que diferente do html que utilizamos apenas <div class="nome da classe", em React temos que adicional o Name na frente do class, como podemos ver abaixo, isso acontece por que a palavra class é uma palavra reservada do js, por isso temos que colocar o nome da classe em letra minúscula juntamente com Name.
     */
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
