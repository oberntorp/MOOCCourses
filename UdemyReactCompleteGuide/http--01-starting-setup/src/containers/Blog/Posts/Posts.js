import React, { Component } from 'react';
import axios from '../../../axios';
import { Route } from 'react-router-dom';
import './Posts.css';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

class Posts extends Component{
    state = {
        posts: [],
    }

    componentDidMount(){
        console.log(this.props);

        axios.get("/posts").then(response =>{
            const posts = response.data.slice(0, 5);
            const postsAddedAuthor = posts.map(post => {
                return{ ...post, author: "Oskar" }
            })
            this.setState({posts: postsAddedAuthor });
        }).catch(error => this.setState({errorOccured: true}));
    }

    postSelectedHandler = (postId) => {
        // The standard way of using a route parameter in a link is to wrap the component to go to in a link element, like this:
        // <Link to={"/"+post.id} key={post.id}>

        // To navigate programatically do this:
        //this.props.history.push({pathname: `/posts/${postId}`})
        // Or pass a string:
        this.props.history.push(`/posts/${postId}`)
    }

    render(){
        let posts = <p>An error occured!</p>
        
        if(!this.state.errorOccured){
            posts = this.state.posts.map(post => {
                return <Post key={post.id} title={post.title} author={post.author} clicked={this.postSelectedHandler.bind(this, post.id)} />
            });
        }

        return(
        <div>
             <section className="Posts">
            {posts}
        </section>
        <Route path={`${this.props.match.url}/:id`} component={FullPost} />
        </div>
    )};
}

export default Posts;