import React from 'react';
import styles from './RegisterPage.module.css';

function RegisterPage() {
  return (
    <>
      <form onSubmit={null} className={styles.form}>
        <label className={styles.label}>
          <span>Name</span>
          <input
            className={styles.input}
            onChange={null}
            type="text"
            name="name"
            value={null}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
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
          Register me
        </button>
      </form>
    </>
  );
}

export default RegisterPage;
