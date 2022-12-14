import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getLoggedIn } from 'redux/authorization/authorization-selectors';
import styles from './NavStyles.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(getLoggedIn);
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.activeLink : styles.link && styles.home)}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link && styles.contacts
          }
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
