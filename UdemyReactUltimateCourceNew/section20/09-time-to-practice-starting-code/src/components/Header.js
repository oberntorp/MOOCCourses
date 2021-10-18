import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="quotes">All quotes</NavLink>
          </li>
          <li>
            <NavLink to="quotes/add">Add a new Quote</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
