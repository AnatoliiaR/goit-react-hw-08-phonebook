import style from './UserMenu.module.css';
// import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../../redux/auth/auth-selector';
import { logout } from '../../../redux/auth/auth-operations';

const UserMenu = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={style.container}>
      <div className={style.name}>
        {name},{''}
      </div>
      <button onClick={onLogout} className={style.button}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
