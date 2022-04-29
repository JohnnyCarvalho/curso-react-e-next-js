/**
 * @author Johnny Carvalho;
 * 
 * Na classe a seguir nós veremos um exemplo de como criar 
 * vários objetos e usá-los dentro do html com jsx.
 */

import '../Styles/App.css';
import { Component } from 'react';
import { render } from 'react-dom';


export class ArrayStates extends Component {
    // state cria um objeto que será utilizado para armazenar os dados do nosso componente.
    state = {
        /**
         * Nesse caso nós criamos um array de objetos, ou seja, cada objeto recebe um titulo, 
         * um conteúdo e um autor.
         * Depois nós chamamos o método map para cada objeto do array e retornamos um 
         * h1 com o titulo do objeto em questão.
         * Vejamos o código abaixo:
         */
        posts: [ 
            {
                id: 1,
                title: 'O título 1',
                body: 'O corpo 1'
            },
            {
                id: 2,
                title: 'O título 2',
                body: 'O corpo 2',
            },
            {
                id: 3,
                title: 'O título 3',
                body: 'O corpo 3',
            },
        ]
    };

    render() {
        /**
         * Abaixo nós criamos uma constante chamada posts que recebe o array de objetos que
         * está no state. Depois nós chamamos o método map para cada objeto do array e
         * retornamos um h1 com o titulo do objeto em questão.
         */
        const { posts } = this.state;

        return (
            <div className="App">
                {posts.map(
                    //posts => <h1>{posts.title}</h1> *** forma errada ***

                    // forma correta usando key.
                    posts => (
                    <div key={posts.id}>
                        <h1>{posts.title}</h1>
                        <h2>{posts.body}</h2>
                    </div>

                ))}
            </div>
        );
    }
}
