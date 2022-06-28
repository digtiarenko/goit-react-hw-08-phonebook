import { useSelector, useDispatch } from 'react-redux';
import styles from './UserMenu.module.css';
import { getUserName } from '../../../redux/auth/authSelectors';
import { logOut } from '../../../redux/auth/authOperations';

function UserMenu() {
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();
  return (
    <div className={styles.userMenu}>
      <p>Hi, {userName}</p>
      <button
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        {' '}
        Log Out
      </button>
    </div>
  );
}

export default UserMenu;
