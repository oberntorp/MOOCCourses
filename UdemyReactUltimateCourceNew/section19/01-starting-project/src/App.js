import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/UI/Notification";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { fetchCartData, sendCartData } from "./store/cart-actions";
let isInitial = true;

function App() {
  const uiState = useSelector((state) => state.ui);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {uiState.showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
