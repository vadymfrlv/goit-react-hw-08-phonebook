import { useSelector } from 'react-redux';
import { Navigation, AuthorizationNav } from '../Navigation';
import UserMenu from '../UserMenu';
import { getLoggedIn } from 'redux/authorization/authorization-selectors';
import styles from './SharedLayout.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(getLoggedIn);
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Navigation />
        {!isLoggedIn ? <AuthorizationNav /> : <UserMenu />}
      </div>
    </header>
  );
}
