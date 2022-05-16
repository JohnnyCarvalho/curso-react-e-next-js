/**
 * @author Johnny Carvalho
 * 
 * Nessa aula vamos aprender como fazer uma busca em uma API externa.
 * 
 */

import '../Styles/App.css';
import { Component } from 'react';
import { render } from 'react-dom';

export class BuscandoDadosExternos extends Component {

    state = {
        posts: []
    };

    componentDidMount() {}

    loadPosts =  async () => {
        fetch('https://jsonplaceholder.typicode.com/posts')

        const [ posts ] = Promise.all([postsResponse]);

        const postsJson = await posts.jason();

        this.setState({ posts: postsJson })
    }

    render() {
        const { posts } = this.state;

        return (
            <div className='posts'>
                {posts.map(
                    posts => (
                        <div key={posts.id} className="post-content">
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

/**
 * 
            {
                id: 'Johnny',
                title: 'Texto de Johnny',
                body: 'The body 1'
            },
            {
                id: 'Bruna',
                title: 'Texto de Bruna',
                body: 'The body 2'
            },
            {
                id: 'João',
                title: 'Texto de João',
                body: 'The body 3'
            }
        
 */