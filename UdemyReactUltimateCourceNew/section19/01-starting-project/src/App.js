import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const uiState = useSelector((state) => state.ui);
  return (
    <Layout>
      {uiState.showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
