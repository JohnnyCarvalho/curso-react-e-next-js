/**
 * @author Johnny Carvalho
 * 
 * Nessa aula iremos aprender como inserir um mecanismo de busca 
 * em nossa pagina de posts.
 * 
 */

import '../Styles/App.css';

import { Component } from 'react';


import { loadPosts } from '../Utils/load-posts'
import { Posts } from '../components/Posts/index.jsx'
import { Button } from '../components/Button';
import { TextInput } from '../components/Imput';

export class InputDeTexto extends Component {

    state = {
        posts: [],
        allPosts: [],
        page: 0,
        postsPerPage: 9,
        searchValue: ''
    };

    async componentDidMount() {
        await this.loadPosts();
    }

    loadPosts = async () => {
        const { page, postsPerPage } = this.state;

        const postsAndPhotos = await loadPosts();
        this.setState({
            posts: postsAndPhotos.slice(page, postsPerPage),
            allPosts: postsAndPhotos
        })
    }

    loadMorePosts = () => {
        const {
            page,
            postsPerPage,
            allPosts,
            posts
        } = this.state;

        const nextPage = page + postsPerPage;
        const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
        posts.push(...nextPosts);

        this.setState({ posts, page: nextPage })
    }

    handleChange = (e) => {
        const { value } = e.target;
        this.setState({ searchValue: value })
    }

    render() {
        const { posts, page, postsPerPage, allPosts, searchValue } = this.state;

        const noMorePosts = page + postsPerPage >= allPosts.length;

        const filteredPosts = !!searchValue ?
            allPosts.filter(post => {
                return post.title.toLowerCase().includes(
                    searchValue.toLowerCase()
                );
            })

            : posts;

        return (
            <section className='container'>

                <div className='search-containner'>
                    {!!searchValue && (
                        <>
                            <h1>Search value: {searchValue}</h1>
                            <br />
                        </>

                    )}

                    <TextInput searchValue={searchValue} handleChange={this.handleChange} />
                </div>

                <div className='filter-containner'>
                    {filteredPosts.length > 0 && (
                        <Posts posts={filteredPosts} />
                    )}
                    {filteredPosts.length === 0 && (
                        <h4>Nenhum resultado encontrado!</h4>
                    )}
                </div>

                <div className='button-containner'>
                    {!searchValue && (
                        <Button
                            text="Load more posts"
                            onClick={this.loadMorePosts}
                            disabled={noMorePosts}
                        />
                    )}
                </div>

            </section>
        )
    }
}