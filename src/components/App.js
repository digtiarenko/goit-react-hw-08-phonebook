import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { useDispatch, useSelector } from 'react-redux';
import { refreshCurrentUser } from 'redux/auth/authOperations';
import SharedLayout from './SharedLayout';
import Skeleton from './Skeleton';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { getIsLoading } from 'redux/auth/authSelectors';

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
      <Suspense fallback={<Skeleton />}>
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

  // return (
  //   <div style={{ marginLeft: '30px' }}>
  //     <h1> Phonebook </h1>
  //     <ContactForm />
  //     <h1> Contacts </h1>
  //     <Filter />
  //     <ContactList />
  //   </div>
  // );
}

export { App };
