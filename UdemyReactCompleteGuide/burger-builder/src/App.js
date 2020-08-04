import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render(){
  return (
    <div>
      {/* When deploying an app to a server, do not forget to set the basename attribute on BrowserRouter to the path that should work as the landing path e.i /my-app */}
      <Layout>
        <BurgerBuilder/>
      </Layout>
    </div>
  );
  }
}

export default App;
