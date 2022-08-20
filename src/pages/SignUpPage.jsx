// import AuthorizationForm from 'components/Authorization';

// const SignUpPage = () => {
//   return <AuthorizationForm />;
// };

// export default SignUpPage;

import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userSignUpThunk } from 'redux/authorization/authorization-operations';

import styles from './PageStyles.module.css';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
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

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(userSignUpThunk({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Sign Up page</h1>

      <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
        <TextField
          className={styles.inputText}
          label="Name"
          variant="standard"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          color="success"
        />

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
          Sign Up
        </Button>
      </form>
    </div>
  );
}
