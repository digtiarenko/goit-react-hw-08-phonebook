import React, { useState } from 'react';
import styles from './LoginPage.module.css';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';

function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { value, name } = event.target;
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          <span>E-mail</span>
          <input
            className={styles.input}
            onChange={handleChange}
            type="email"
            name="email"
            value={email}
            pattern="\A(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)\Z"
            required
            autoComplete="on"
          />
        </label>
        <label className={styles.label}>
          <span>Password </span>
          <input
            className={styles.input}
            onChange={handleChange}
            value={password}
            type="password"
            name="password"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            autoComplete="on"
          />
        </label>

        <button className={styles.btn} type="submit">
          Let me in
        </button>
      </form>
    </>
  );
}

export default LoginPage;
