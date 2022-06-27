import { Outlet, NavLink } from 'react-router-dom';
import styles from './SharedLayout.module.css';
import Logo from './Logo';

const SharedLayout = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <NavLink className={styles.link} to="/login">
            My Contacts
          </NavLink>
          <NavLink className={styles.link} to="/">
            <Logo />
          </NavLink>
          <NavLink className={styles.link} to="/login">
            Login
          </NavLink>
          <NavLink className={styles.link} to="/register">
            Register
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
