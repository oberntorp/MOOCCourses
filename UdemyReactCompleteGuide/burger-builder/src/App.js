import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Checkout from './containers/Checkout/Checkout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render(){
  return (
    <div>
      {/* When deploying an app to a server, do not forget to set the basename attribute on BrowserRouter to the path that should work as the landing path e.i /my-app */}
      <Layout>
        <Switch>
        <Route path="/checkout" component={Checkout} />
        <Route path="/" component={BurgerBuilder} />
        </Switch>
      </Layout>
    </div>
  );
  }
}

export default App;
