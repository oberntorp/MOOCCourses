import { Redirect, Route, Switch } from "react-router";
import Header from "./components/Header";
import Quotes from "./pages/Quotes";
import NewQuote from "./pages/NewQuote";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <Quotes />
        </Route>
        <Route path="/quotes/add">
          <NewQuote />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
