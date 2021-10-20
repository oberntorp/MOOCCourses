import { Route } from "react-router-dom";
import NewUser from "./NewUser";

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome page</h1>
      <Route path="/welcome/new-user">
        <NewUser />
      </Route>
    </section>
  );
};

export default Welcome;
