import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getLoggedIn } from 'redux/authorization/authorization-selectors';
import styles from './App.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(getLoggedIn);
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
        Main
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
