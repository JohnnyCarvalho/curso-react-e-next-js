/**
 * @author Johnny Carvalho
 * 
 */

import '../Styles/App.css';
import { Component } from 'react';
import { render } from 'react-dom';

export class BuscandoDadosExternos extends Component {

    state = {
        posts: [
            {
                id: 'Johnny',
                title: 'Texto de Johnny',
                body: 'The body 1'
            },
            {
                id: 'Bruna',
                title: 'Bruna Boccaldi',
                body: 'The body 2'
            },
            {
                id: 'João',
                title: 'João Victor',
                body: 'The body 3'
            }
        ]
    };

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    render() {
        const { posts } = this.state;

        return (
            <div className='App'>
                {posts.map(
                    posts => (
                        <div key={posts.id}>
                            <br />
                            <h1>{posts.title}</h1>
                            <h1>{posts.body}</h1>
                        </div>
                    )
                )}
            </div>
        )
    }
}