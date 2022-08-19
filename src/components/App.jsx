import { useEffect, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import PublicRoute from './Routes/PublicRoute';
import PrivateRoute from './Routes/PrivateRoute';
import UserMenu from './UserMenu';
import { getCurrentUserThunk } from 'redux/authorization/authorization-operations';
import { getLoggedIn } from 'redux/authorization/authorization-selectors';
import styles from './App.module.css';

const HomePage = lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: 'ContaHomePagectsPage' */)
);
const SignUpPage = lazy(() => import('../pages/SignUpPage' /* webpackChunkName: 'SignUpPage' */));
const LoginPage = lazy(() => import('../pages/LoginPage' /* webpackChunkName: 'LoginPage' */));
const ContactsPage = lazy(() =>
  import('../pages/ContactsPage' /* webpackChunkName: 'ContactsPage' */)
);

export default function App() {
  const isLoggedIn = useSelector(getLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUserThunk());
  }, [dispatch]);

  return (
    <>
      {isLoggedIn && <UserMenu />}
      <h1 className={styles.title}>Phonebook</h1>
      <Routes>
        <Route path="/" element={<PublicRoute component={HomePage} restricted />} />
        <Route path="/signup" element={<PublicRoute component={SignUpPage} restricted />} />
        <Route path="/login" element={<PublicRoute component={LoginPage} restricted />} />
        <Route path="/contacts" element={<PrivateRoute component={ContactsPage} />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
}
