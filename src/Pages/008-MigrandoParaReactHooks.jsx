/**
 * @author Johnny Carvalho
 * 
 * Nessa aula iremos migrar nosso projeto para utilização de
 * Hooks, essa aula é para termos uma noção do que é Hooks e em 
 * qual momento sua utilização se faz necessária.
 */
 import { useCallback, useEffect, useState } from 'react';

import '../Styles/App.css';

import { Posts } from '../components/Posts';
import { loadPosts } from '../Utils/load-posts';
import { Button } from '../components/Button';
import { TextInput } from '../components/Imput';

export const Home = () => {

    const [posts, setPosts] = useState([]);
    const [allPosts, setAllPosts] = useState([]);
    const [page, setPage] = (0);
    const [postsPerPage] = useState(9);
    const [searchValue, setSearchValue] = useState('');

    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue ?
        allPosts.filter(post => {
            return post.title.toLowerCase().includes(
                searchValue.toLowerCase()
            );
        })
        : posts;

    const handleLoadPosts = useCallback(async (page, postsPerPage) => {
        const postsAndPhotos = await loadPosts();

        setPosts(postsAndPhotos.slice(page, postsPerPage));
        setAllPosts(postsAndPhotos);

    }, []);

    useEffect(() => {
        handleLoadPosts(0, postsPerPage);
    }, [handleLoadPosts, postsPerPage]);

    const loadMorePosts = () => {
        const nextPage = page + postsPerPage;
        const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
        posts.push(...nextPosts);

        setPosts(posts);
        setPage(nextPage);
    }

    const handleChange = (e) => {
        const { value } = e.target;
        setSearchValue(value)
    }

    return (
        <section className='container'>

            <div className='search-containner'>
                {!!searchValue && (
                    <>
                        <h1>Search Value: {searchValue}</h1>
                        <br></br>
                    </>
                )}
                <TextInput searchValue={searchValue}
                    handleChange={handleChange} />
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
                        text="Load More Posts"
                        onClick={loadMorePosts}
                        disabled={noMorePosts} />
                )}
            </div>
        </section>
    );
}
