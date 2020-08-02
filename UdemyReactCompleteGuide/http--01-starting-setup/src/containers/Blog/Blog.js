import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from '../../axios';

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        errorOccured: false
    }

    componentDidMount(){
        axios.get("/posts").then(response =>{
            const posts = response.data.slice(0, 5);
            const postsAddedAuthor = posts.map(post => {
                return{ ...post, author: "Oskar" }
            })
            this.setState({posts: postsAddedAuthor });
            console.log(response);
        }).catch(error => this.setState({errorOccured: true}));
    }

    postSelectedHandler = (postId) => {
        this.setState({ selectedPostId: postId });
    }

    render () {
        let posts = <p>An error occured!</p>
        
        if(!this.state.errorOccured){
            posts = this.state.posts.map(post => {
                return <Post key={post.id} title={post.title} author={post.author} clicked={this.postSelectedHandler.bind(this, post.id)} />
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    {(!this.state.errorOccured) ? <FullPost selectedPostId={this.state.selectedPostId} /> : <p>A post can´t be selected when there is an error</p>}
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;