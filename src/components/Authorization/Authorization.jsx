import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import { userSignUpThunk, userLoginThunk } from 'redux/authorization/authorization-operations';
import { getUserError } from 'redux/authorization/authorization-selectors';
import styles from './Authorization.module.css';

const AuthorizationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const error = useSelector(getUserError);
  const location = useLocation().pathname;
  const dispatch = useDispatch();

  const handleChangeInput = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (location === '/signup') {
      if (name === '' || email === '' || password === '') return;
      dispatch(userSignUpThunk({ name, email, password }));
      setName('');
      setEmail('');
      setPassword('');
    }

    if (location === '/login') {
      if (email === '' || password === '') return;
      dispatch(userLoginThunk({ email, password }));
      setEmail('');
      setPassword('');
    }
  };

  const textFieldSX = {
    '& .MuiOutlinedInput-root': {
      '& > fieldset': {
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.676)',
      },
      '&:hover fieldset': {
        borderColor: '#acfc00',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#acfc00',
      },
    },
  };

  const buttonSX = {
    fontSize: 17,
    fontWeight: 700,
    letterSpacing: 1,
    borderWidth: 2,
    backgroundColor: 'transparent',
    borderColor: 'rgba(0, 21, 255, 0.5)',
    color: 'rgba(0, 21, 255, 0.5)',
    '&:hover': {
      borderColor: '#acfc00',
      color: '#acfc00',
      borderWidth: 2,
    },
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.title}>
        {location === '/login' ? "Let's login to start" : "Let's create your account"}
      </h2>

      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        {location === '/signup' && (
          <TextField
            className={styles.input}
            label="Name"
            variant="outlined"
            type="text"
            name="name"
            value={name}
            onChange={handleChangeInput}
            placeholder="Name Surname"
            required
            sx={textFieldSX}
            inputProps={{
              style: {
                fontSize: 17,
                margin: 0,
                fontWeight: 700,
                color: 'rgba(255, 255, 255, 0.676)',
              },
            }}
            InputLabelProps={{
              style: { fontSize: 15, fontWeight: 700, color: 'rgba(255, 255, 255, 0.676)' },
            }}
          />
        )}

        <TextField
          className={styles.input}
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          value={email}
          onChange={handleChangeInput}
          placeholder="example@mail.com"
          required
          sx={textFieldSX}
          inputProps={{
            style: {
              fontSize: 17,
              margin: 0,
              fontWeight: 700,
              color: 'rgba(255, 255, 255, 0.676)',
            },
          }}
          InputLabelProps={{
            style: { fontSize: 15, fontWeight: 700, color: 'rgba(255, 255, 255, 0.676)' },
          }}
        />

        <TextField
          className={styles.input}
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          value={password}
          onChange={handleChangeInput}
          placeholder="at least 8 chars, numbers and letters"
          required
          sx={textFieldSX}
          inputProps={{
            style: { fontSize: 17, fontWeight: 700, color: 'rgba(255, 255, 255, 0.676)' },
            pattern: '/^(?=.*d)(?=.*[a-z])(?=.*[A-Z]){8,}$/',
          }}
          InputLabelProps={{
            style: { fontSize: 15, fontWeight: 700, color: 'rgba(255, 255, 255, 0.676)' },
          }}
        />
        <Button type="submit" variant="outlined" sx={buttonSX}>
          {location === '/login' ? 'Login' : 'Sign Up'}
        </Button>
        <div className={styles.errorContainer}>
          {error && (
            <p className={styles.error}>
              {location === '/login' ? ' Incorrect email or password' : 'This email is alredy used'}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default AuthorizationForm;
