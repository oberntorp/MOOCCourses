import React, { Component, Suspense } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Logout from './containers/Auth/Logout/Logout';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';

const Auth = React.lazy(() => import('./containers/Auth/Auth'));
const Orders = React.lazy(() => import('./containers/Orders/Orders'));
const Checkout = React.lazy(() => import('./containers/Checkout/Checkout'));

class App extends Component {

  componentDidMount(){
    this.props.onAuthCheckState();
  }
  render(){
  let routes = (
    <Suspense fallback={<div>Loading...</div>}>
    <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/" component={BurgerBuilder} />
        <Redirect to="/" />
        </Switch>
        </Suspense>
  );

  if(this.props.isAuth){
    routes = (
      <Suspense fallback={<div>Loading...</div>}>
      <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/logout" component={Logout} />
          <Route path="/auth" component={Auth} />
          <Route path="/" component={BurgerBuilder} />
          <Redirect to="/" />
          </Switch>
          </Suspense>
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
