import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <nav className={s.nav}>
      <NavLink className={s.link} to="/register">
        Sign up
      </NavLink>
      <NavLink className={s.link} to="/login">
        Sign in
      </NavLink>
    </nav>
  );
};

export default AuthNav;
