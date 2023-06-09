import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { useSelector, useDispatch } from 'react-redux';
import { signup } from '../../redux/auth/auth-operations';
import { isUserLogin } from '../../redux/auth/auth-selector';
import { Navigate } from 'react-router-dom';
import style from './RegisterPage.module.css';

const RegisterPage = () => {
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div className={style.page}>
      <h1 className={style.title}>Register Page</h1>
      <RegisterForm onSubmit={handleSignup} className={style.form} />
    </div>
  );
};

export default RegisterPage;
