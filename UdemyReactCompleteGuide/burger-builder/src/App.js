import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';

class App extends Component {

  componentDidMount(){
    this.props.onAuthCheckState();
  }
  render(){
  let routes = (
    <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/" component={BurgerBuilder} />
        <Redirect to="/" />
        </Switch>
  );

  if(this.props.isAuth){
    routes = (
      <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/logout" component={Logout} />
          <Route path="/" component={BurgerBuilder} />
          <Redirect to="/" />
          </Switch>
    );
  }
  return (
    <div>
      {/* When deploying an app to a server, do not forget to set the basename attribute on BrowserRouter to the path that should work as the landing path e.i /my-app */}
      <Layout>
        {routes}
      </Layout>
    </div>
  );
  }
}
const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null
  };
}
const mapDispatchToProps = dispatch => {
  return {
    onAuthCheckState: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
