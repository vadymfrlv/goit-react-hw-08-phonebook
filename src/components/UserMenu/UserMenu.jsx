import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { userLogoutThunk } from 'redux/authorization/authorization-operations';
import { getUserName } from 'redux/authorization/authorization-selectors';
import avatar from '../../images/avatar.png';
import styles from './UserMenu.module.css';

const UserMenu = () => {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  const buttonSX = {
    fontSize: 13,
    fontWeight: 900,
    letterSpacing: 1,
    borderWidth: 2,
    padding: '2px 6px',
    backgroundColor: 'transparent',
    borderColor: 'rgba(255, 255, 255, 0.676)',
    color: 'rgba(255, 255, 255, 0.676)',
    '&:hover': {
      borderColor: '#acfc00',
      color: '#acfc00',
      borderWidth: 2,
    },
  };

  return (
    <div className={styles.menu}>
      <img className={styles.avatar} src={avatar} width="30" height="30" alt="avatar icon" />
      <span className={styles.name}>Hi, {name}</span>

      <Button
        type="button"
        variant="outlined"
        sx={buttonSX}
        onClick={() => dispatch(userLogoutThunk())}
      >
        Log Out
      </Button>
    </div>
  );
};

export default UserMenu;
