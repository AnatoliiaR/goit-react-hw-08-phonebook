import { Link } from 'react-router-dom';
import UserMenu from './UserMenu/UserMenu';
import NavbarAuth from './NavBarAuth/NavbarAuth';
import { useSelector } from 'react-redux';
import { isUserLogin } from 'redux/auth/auth-selector';
import style from './NavBar.module.css';

const NavBar = () => {
  const isLogin = useSelector(isUserLogin);
  return (
    <div className={style.nav}>
      <div>
        <Link to="/" className={style.logo}>
          Phonebook
        </Link>
      </div>
      <div className={style.menu}>
        {!isLogin && <NavbarAuth />}
        {isLogin && <UserMenu />}
      </div>
    </div>
  );
};

export default NavBar;
