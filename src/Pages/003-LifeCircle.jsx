/**
 * @author Johnny Carvalho
 * 
 * Life circle methods é uma das mais importantes coisas que
 * você vai aprender ao aprender React. Ela é um método que 
 * é chamado quando o componente é renderizado, e é o método
 * que você vai aprender ao aprender React.
 * 
 */

import '../Styles/App.css';
import { Component } from 'react';
import { render } from 'react-dom';


export class LifeCircle extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        setTimeout(() => {
        this.setState({
            posts: [
                
                {
                    id: 'johnny',
                    title: 'Johnny Carvalho',
                    body: 'The body 1'
                },
                {
                    id: 'bruna',
                    title: 'Bruna Carvalho',
                    body: 'The body 2'
                },
                {
                    id: 'joao',
                    title: 'João Carvalho',
                    body: 'The body 3'
                },
            ]
        });
    }, 2000);
}

    render() {
        const { posts } = this.state;

        return (
            <div className="App">
                {posts.map(
                    posts => (
                        <div key={posts.id}>
                            <h1>{posts.title}</h1>
                            <h2>{posts.body}</h2>
                            <br></br>
                        </div>
                    ))}
            </div>
        );
    }
}


/**
 * 
 */
export class LifeCircle2 extends Component {
    state = {
        counter: 0,
        posts: [
                
            {
                id: 'Johnny Carvalho',
                title: 'The title 1',
                body: 'The body 1'
            },
            {
                id: 'Bruna Carvalho',
                title: 'The title 2',
                body: 'The body 2'
            },
            {
                id: 'João Carvalho',
                title: 'The title 3',
                body: 'The body 3'
            },
        ]
    }

    /**
     * O timeoutUpdate é um método que é chamado quando o 
     * componente é renderizado. 
     * Ele é utilizado para atualizar o estado do componente.
     */
    timeoutUpdate = null;

    componentDidMount() {
        this.handleTimeout();
    }

    componentDidUpdate() {
        this.handleTimeout();
    }

    componentWillUnmount() {
        clearTimeout(this.timeoutUpdate)
    }

    handleTimeout = () => {
        const { posts, counter } = this.state;
        posts[0].title = 'The new title';

        this.timeoutUpdate = setTimeout(() => {
            this.setState({ posts, counter: counter+1 });
            
        }, 2000);
    }


    render() {
        const { posts, counter } = this.state;

        return (
            <div className="App">
                <br></br>
                <br></br>
                <h1>{counter}</h1>
                {posts.map(
                    posts => (
                        <div key={posts.id}>
                            <h1>{posts.title}</h1>
                            <p>{posts.body}</p>
                        </div>
                    ))}
            </div>
        );
    }
}