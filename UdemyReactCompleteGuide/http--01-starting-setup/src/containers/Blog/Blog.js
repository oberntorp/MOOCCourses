import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {
    render () {
        /* Use Link to tell react to create a link and prevent reloading
           Use NavLink to be able to have a active class assigned to the active class
           Use activeClassName when you want another className than active
           Use activeStyle (like inline styles in react, for setting an inline style when active)
           Use exact on first link to make only one link be styled as active
        */
        return (
            <div>
                <header>
                    <ul>
                        <li><NavLink to="/" exact>Home</NavLink></li>
                        <li><NavLink to={{
                            pathname: "/new-post",
                            hash: "#search",
                            search: "?IlikeReact=true"

                            }}>New Post</NavLink></li>
                    </ul>
                </header>
                <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/:id" component={FullPost} />
                </Switch>


            </div>
        );
    }
}

export default Blog;