import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import { isUserLogin } from '../../redux/auth/auth-selector';
import { Navigate } from 'react-router-dom';
import LoginForm from 'components/LoginForm/LoginForm';
import style from './LoginPage.module.css';

const LoginPage = () => {
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div className={style.page}>
      <h1 className={style.title}>Login Page</h1>
      <LoginForm onSubmit={handleLogin} className={style.form} />
    </div>
  );
};

export default LoginPage;
