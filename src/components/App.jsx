import { useEffect, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { PublicRoute, PrivateRoute } from './Routes';
import { getCurrentUserThunk } from 'redux/authorization/authorization-operations';
import { getIsFetchCurrentUser } from 'redux/authorization/authorization-selectors';
import SharedLayout from './SharedLayout';

const HomePage = lazy(() =>
  import('../pages/HomePage/HomePage' /* webpackChunkName: 'ContaHomePagectsPage' */)
);
const SignUpPage = lazy(() =>
  import('../pages/SignUpPage/SignUpPage' /* webpackChunkName: 'SignUpPage' */)
);
const LoginPage = lazy(() =>
  import('../pages/LoginPage/LoginPage' /* webpackChunkName: 'LoginPage' */)
);
const ContactsPage = lazy(() =>
  import('../pages/ContactsPage/ContactsPage' /* webpackChunkName: 'ContactsPage' */)
);

export default function App() {
  const isFetchCurrentUser = useSelector(getIsFetchCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUserThunk());
  }, [dispatch]);

  return (
    !isFetchCurrentUser && (
      <>
        <SharedLayout />

        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute restricted>
                <SignUpPage />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
        </Routes>
      </>
    )
  );
}
