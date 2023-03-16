import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isUserLogin } from 'redux/auth/auth-selector';

const PrivateRoute = () => {
  const isLogin = useSelector(isUserLogin);

  if (!isLogin) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
