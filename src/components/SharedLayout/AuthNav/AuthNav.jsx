import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

function AuthNav() {
  return (
    <div className={styles.authMenu}>
      <NavLink className={styles.link} to="/login">
        Login
      </NavLink>
      <NavLink className={styles.link} to="/register">
        Register
      </NavLink>
    </div>
  );
}

export default AuthNav;
