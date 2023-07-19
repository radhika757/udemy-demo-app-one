import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Contact
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Products
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
