import React, { Component } from 'react';

import './FullPost.css';
import axios from 'axios';

class FullPost extends Component {

    state = {
        loadedPost: null
    }

    componentDidMount(){
        console.log(this.props.match.params.id);
        this.loadData();
    }

    componentDidUpdate(){
        this.loadData();
    }
    loadData() {
        if (this.props.match.params.id) {
            if (this.isNewPostLoaded()) {
                axios.get(`/posts/${this.props.match.params.id}`).then(response => this.setState({ loadedPost: response.data }));
            }
        }
    }

    isNewPostLoaded = () => {
        return (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== Number(this.props.match.params.id)));
    }

    deletePostHandler = () => {
        axios.delete(`/posts/${this.props.match.id}`).then(response => {
            console.log(response);
    });
    }

    render () {
        let post = <p>Please select a Post!</p>;
        if(this.props.match.params.id){
            post = <p>Loading...</p>;
        }

        if(this.state.loadedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
    
            );
        }
        return post;
    }
}

export default FullPost;