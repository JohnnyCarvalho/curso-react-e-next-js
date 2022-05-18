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

    componentDidMount() {
        this.loadPosts();
    }

    loadPosts = async () => {
        const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');

        const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

        const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

        const postsJson = await posts.json();
        const photosJson = await photos.json();

        const postsAndPhotos = postsJson.map((post, index) => {
            return { ...post, cover: photosJson[index].url };
        });

        this.setState({ posts: postsAndPhotos })
    }

    render() {
        const { posts } = this.state;

        return (
            <section className='container'>
                <div className='posts'>
                    {posts.map(post => (
                        <div className='post'>
                            <img src={post.cover} alt={post.title} />
                            <div key={post.id}className="post-content">
                                <br />
                                <h1>{post.title}</h1>
                                <p>{post.body}</p>
                            </div>
                        </div>
                    )
                    )}
                </div>
            </section>
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