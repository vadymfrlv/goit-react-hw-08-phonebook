import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './App.module.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/signup"
        className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
      >
        Sign Up
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
      >
        Login
      </NavLink>
    </div>
  );
}
