import React, {Component} from 'react';
import Link from 'next/link';
import Router from 'next/router';

class Index extends Component{
    // Only executes on the server if the component is not navigated via the app
    static async getInitialProps(context){
        const promise = new Promise((resolve, reject) =>{
            setTimeout(() => resolve({appName: "MyApp"}, 1000))
        });
        return promise;
    }
    render(){
        return (<div>
        <h1>The main page of {this.props.appName}!</h1>
        <p>Go to <Link href="/auth"><a>Auth</a></Link></p>
        <button onClick={() => Router.push("/auth")}>Go to Auth</button>
        </div>
);
    }
}

export default Index;