/**
 * @author Johnny Carvalho
 * 
 * Nessa aula vamos aprender como organizar melhor o 
 * nosso código utilizando componentes
 * 
 */

 import '../Styles/App.css';

 import { Component } from 'react';


 import { loadPosts } from '../Utils/load-posts'
 import { Posts } from '../components/Posts/index.jsx'
  
 export class OrganizacaoDosComponentes2 extends Component {
  
      state = {
          posts: []
      };
  
      async componentDidMount() {
        await this.loadPosts();
      }
  
      loadPosts = async () => {
          const postsAndPhotos = await loadPosts();
          this.setState({ posts: postsAndPhotos })
      }
  
      render() {
          const { posts } = this.state;
  
          return (
              <section className='container'>
                  <Posts posts={posts} />
              </section>
          )
      }
  }
  