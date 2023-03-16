import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { useSelector, useDispatch } from 'react-redux';
import { signup } from '../../redux/auth/auth-operations';
import { isUserLogin } from '../../redux/auth/auth-selector';
import { Navigate } from 'react-router-dom';

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
    <div>
      <h1>RegisterPage</h1>
      <RegisterForm onSubmit={handleSignup} />
    </div>
  );
};

export default RegisterPage;
