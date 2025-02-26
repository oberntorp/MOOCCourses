import { Link } from "react-router-dom";
const Products = () => {
  return (
    <section>
      <h1>The Products page</h1>
      <ul>
        <li>
          <li>
            <Link to="products/p1">A book</Link>
          </li>
          <li>
            <Link to="products/p2">A carpet</Link>
          </li>
          <li>
            <Link to="products/p3">An online course</Link>
          </li>
        </li>
      </ul>
    </section>
  );
};

export default Products;
