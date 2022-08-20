import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavStyles.module.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/signup"
        className={({ isActive }) => (isActive ? styles.activeLink : styles.link && styles.signup)}
      >
        Sign Up
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? styles.activeLink : styles.link && styles.login)}
      >
        Login
      </NavLink>
    </div>
  );
}
