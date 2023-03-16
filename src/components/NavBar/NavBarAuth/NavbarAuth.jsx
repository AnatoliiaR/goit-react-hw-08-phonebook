import { NavLink } from 'react-router-dom';
import style from '../NavBarAuth/NavbarAuth.module.css';

const NavbarAuth = () => {
  return (
    <div>
      <NavLink to="/register" className={style.link}>
        Register
      </NavLink>
      {''}|
      <NavLink to="/login" className={style.link}>
        Login
      </NavLink>
    </div>
  );
};

export default NavbarAuth;
