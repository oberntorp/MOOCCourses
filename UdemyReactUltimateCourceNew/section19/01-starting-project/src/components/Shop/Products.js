import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../store/index";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const dispatch = useDispatch();

  const addToCartHandler = (item) => {
    dispatch(addProduct({ item: item }));
  };
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title="Test"
          price={6}
          description="This is a first product - amazing!"
          onAdd={addToCartHandler}
        />
      </ul>
    </section>
  );
};

export default Products;
