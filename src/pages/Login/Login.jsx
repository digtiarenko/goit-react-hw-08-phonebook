import React from 'react';
import styles from './Login.module.css';

function Login() {
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
          <span>Number </span>
          <input
            className={styles.input}
            onChange={null}
            value={null}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button className={styles.btn} type="submit">
          {' '}
          Add contact
        </button>
      </form>
    </>
  );
}

export default Login;
