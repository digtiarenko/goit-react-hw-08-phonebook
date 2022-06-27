import React from 'react';
import styles from './LoginPage.module.css';

function LoginPage() {
  return (
    <>
      <form onSubmit={null} className={styles.form}>
        <label className={styles.label}>
          <span>E-mail</span>
          <input
            className={styles.input}
            onChange={null}
            type="email"
            name="email"
            value={null}
            pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
            required
            autoComplete="on"
          />
        </label>
        <label className={styles.label}>
          <span>Password </span>
          <input
            className={styles.input}
            onChange={null}
            value={null}
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
