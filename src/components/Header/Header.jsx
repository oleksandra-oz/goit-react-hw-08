import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <h2 className={s.title}>Auth</h2>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${s.navLink} ${s.navLinkActive}` : s.navLink
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive ? `${s.navLink} ${s.navLinkActive}` : s.navLink
          }
        >
          Register
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? `${s.navLink} ${s.navLinkActive}` : s.navLink
          }
        >
          Login
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive ? `${s.navLink} ${s.navLinkActive}` : s.navLink
          }
        >
          Contacts
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
