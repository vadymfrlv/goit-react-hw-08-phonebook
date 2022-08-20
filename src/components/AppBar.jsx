import { useSelector } from 'react-redux';
import AuthNav from './AuthNav';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import { getLoggedIn } from 'redux/authorization/authorization-selectors';

import styles from './App.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(getLoggedIn);
  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
