import React from 'react';
import User from '../../components/User';

const authIndex = (props) => (
    <div>
        <h1>The auth page {props.appName}!</h1>
        <User name="Oskar" age ={28}/>
    </div>
);

authIndex.getInitialProps = (context) => {
    const promise = new Promise((resolve, reject) =>{
        setTimeout(() => resolve({appName: "MyApp - (Auth)"}, 1000))
    });
    return promise;
}

export default authIndex;