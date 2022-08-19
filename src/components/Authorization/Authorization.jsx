import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { userSignUpThunk, userLoginThunk } from 'redux/authorization/authorization-operations';
import styles from './Authorization.module.css';

const AuthorizationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const location = useLocation().pathname;
  //   const error = useSelector(getStateError);

  const dispatch = useDispatch();

  const handleChangeInput = evt => {
    const input = evt.target;

    input.name === 'name' && setName(input.value);
    input.name === 'email' && setEmail(input.value);
    input.name === 'password' && setPassword(input.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (location === '/signUp') {
      if (name === '' || email === '' || password === '') return;
      dispatch(userSignUpThunk({ name, email, password }));
    }

    if (location === '/login') {
      if (email === '' || password === '') return;
      dispatch(userLoginThunk({ email, password }));
    }
  };

  return (
    <div>
      <h2 className={styles.title}>{location === '/login' ? 'Login' : 'Sign Up'}</h2>
      <form className={styles.authForm} onSubmit={handleSubmit}>
        {location === '/signUp' && (
          <label className={styles.label}>
            Name
            <input
              className={styles.input}
              type="text"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </label>
        )}
        <label className={styles.label}>
          Email
          <input
            className={styles.input}
            type="text"
            name="email"
            value={email}
            placeholder="example@mail.com"
            onChange={handleChangeInput}
          />
        </label>
        <label className={styles.label}>
          Password
          <input
            className={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChangeInput}
          />
        </label>
        <button className={styles.btn} type="submit">
          {location !== '/signUp' ? 'Login' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default AuthorizationForm;
