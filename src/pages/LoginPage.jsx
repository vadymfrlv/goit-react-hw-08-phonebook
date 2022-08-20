// import AuthorizationForm from 'components/Authorization';

// const LoginPage = () => {
//   return <AuthorizationForm />;
// };

// export default LoginPage;

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLoginThunk } from 'redux/authorization/authorization-operations';

import styles from './PageStyles.module.css';
import { Button, TextField } from '@mui/material';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(userLoginThunk({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Login page</h1>

      <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
        <TextField
          className={styles.inputText}
          label="Email"
          variant="standard"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          color="success"
        />

        <TextField
          className={styles.inputText}
          label="Password"
          variant="standard"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          color="success"
        />

        <Button type="submit" variant="outlined" color="success">
          Login
        </Button>
      </form>
    </div>
  );
}
