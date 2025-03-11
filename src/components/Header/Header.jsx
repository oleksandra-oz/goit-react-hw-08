import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/contacts/slice";
import { logoutThunk } from "../../redux/auth/operations";

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  return (
    <header className={s.header}>
      <h2 className={s.title}>Phonebook</h2>
      {user.name && <h3>{user.email}</h3>}
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
          to="/contacts"
          className={({ isActive }) =>
            isActive ? `${s.navLink} ${s.navLinkActive}` : s.navLink
          }
        >
          Contacts
        </NavLink>

        {!isLoggedIn && (
          <>
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
          </>
        )}
        {isLoggedIn && (
          <button className={s.button} onClick={() => dispatch(logoutThunk())}>
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
