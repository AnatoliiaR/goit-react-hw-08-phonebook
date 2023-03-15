import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));

const UserRoutes = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
