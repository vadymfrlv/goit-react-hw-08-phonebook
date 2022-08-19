import { useDispatch, useSelector } from 'react-redux';
import { userLogoutThunk } from 'redux/authorization/authorization-operations';
import { getUserEmail } from 'redux/authorization/authorization-selectors';
import avatar from '../../images/avatar.png';
import styles from './UserMenu.module.css';

const UserMenu = () => {
  const userEmail = useSelector(getUserEmail);
  const dispatch = useDispatch();

  return (
    <div className={styles.userMenu}>
      <p className={styles.email}>{userEmail}</p>
      <button className={styles.btn} type="button" onClick={() => dispatch(userLogoutThunk())}>
        Logout
      </button>
      <img className={styles.avatar} src={avatar} width="30" height="30" alt="default avatar" />
    </div>
  );
};

export default UserMenu;
