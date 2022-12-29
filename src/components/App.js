import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshCurrentUser } from 'redux/auth/authOperations';
import SharedLayout from './SharedLayout';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { getIsLoading } from 'redux/auth/authSelectors';
import Spinner from './spinner/Spinner';

const About = lazy(() =>
  import('../pages/About' /*webpackChunkName: "About"*/),
);
const LoginPage = lazy(() =>
  import('../pages/LoginPage' /*webpackChunkName: "LoginPage"*/),
);
const RegisterPage = lazy(() =>
  import('../pages/RegisterPage' /*webpackChunkName: "RegisterPage"*/),
);
const ContactsPage = lazy(() =>
  import('../pages/ContactsPage' /*webpackChunkName: "ContactPage"*/),
);

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    !isLoading && (
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<About />} />

            <Route element={<PublicRoute restricted />}>
              <Route path="login" element={<LoginPage />} />
            </Route>

            <Route element={<PublicRoute restricted />}>
              <Route path="register" element={<RegisterPage />} />
            </Route>

            <Route element={<PrivateRoute />}>
              <Route path="contacts" element={<ContactsPage />} />
            </Route>

            <Route path="*" element={<h1>NOT FOUND</h1>} />
          </Route>
        </Routes>
      </Suspense>
    )
  );
}

export { App };
