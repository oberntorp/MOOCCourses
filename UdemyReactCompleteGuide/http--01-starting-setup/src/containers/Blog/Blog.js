import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent/asyncComponent';

const AyncNewPost = asyncComponent (() => import('./NewPost/NewPost'));

class Blog extends Component {

    state = {
        authenticated: true
    }

    render () {
        /* Use Link to tell react to create a link and prevent reloading
           Use NavLink to be able to have a active class assigned to the active class
           Use activeClassName when you want another className than active
           Use activeStyle (like inline styles in react, for setting an inline style when active)
           Use exact on first link to make only one link be styled as active
        */

        // Gard for authentication like this with a state:
       let newPostForAuthUser = null;
       if(this.state.authenticated){
           newPostForAuthUser = <Route path="/new-post" component={AyncNewPost} />;
       }

       // Or inside the guarded components component did mount with a props.history.replase with the route that is if not authenticated 

        return (
            <div>
                <header>
                    <ul>
                        <li><NavLink to="/posts">Home</NavLink></li>
                        <li><NavLink to={{
                            pathname: "/new-post",
                            hash: "#search",
                            search: "?IlikeReact=true"

                            }}>New Post</NavLink></li>
                    </ul>
                </header>
                <Switch>
                    {newPostForAuthUser}
                    <Route path="/posts" component={Posts} />
                    {/* <Route path="/" component={Posts} /> */}
                    {/* <Redirect from="/" to="/posts" /> */}
                    {/* To catch unknown routes the above works or use Route like this with render of component: */}
                    <Route render={() => <h1>Sorry, the specified url do not exist</h1>} />
                </Switch>


            </div>
        );
    }
}

export default Blog;