/**
 * @author Johnny Carvalho
 * 
 * Nessa aula vamos aprender poder usar somente parte de um
 * array, nesse caso vamos fatiar o estado de posts criando um 
 * novo array chamado allPosts utilizando o método slice para
 * fazer esse fatiamento.
 * 
 */

 import '../Styles/App.css';

 import { Component } from 'react';
 
 
 import { loadPosts } from '../Utils/load-posts'
 import { Posts } from '../components/Posts/index.jsx'
 import { Button } from '../components/Button';
 
 export class OrganizacaoDosComponentes2 extends Component {
 
     state = {
         posts: [],
         allPosts: [],
         page: 0,
         postsPerPage: 3
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
 
     render() {
         const { posts } = this.state;
 
         return (
             <section className='container'>
                 <Posts posts={posts} />

                 <div className='button-containner'>
                     <Button
                         text="Load more posts"
                         onClick={this.loadMorePosts}
                     />
                 </div>
             </section>
         )
     }
 }