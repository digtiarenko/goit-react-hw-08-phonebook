import { Outlet, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './SharedLayout.module.css';
import Logo from './Logo';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';

const SharedLayout = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <NavLink className={styles.link} to="contacts">
            My Contacts
          </NavLink>
          <NavLink className={styles.link} to="/">
            <Logo />
          </NavLink>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
