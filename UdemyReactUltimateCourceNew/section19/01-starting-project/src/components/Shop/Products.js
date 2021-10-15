import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../store/index";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "Star Wars: The revenge of the sith",
    description: "A sith that revenges",
    price: 33.444,
  },
  {
    id: "p2",
    title: "Saving Capitalism",
    description: "Save the capitalism",
    price: 13.444,
  },
];
const Products = (props) => {
  const dispatch = useDispatch();

  const addToCartHandler = (item) => {
    dispatch(addProduct({ item: item }));
  };
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((p) => (
          <ProductItem
            key={p.id}
            id={p.id}
            title={p.title}
            price={p.price}
            description={p.description}
            onAdd={addToCartHandler}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
