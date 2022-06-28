import React, { useState } from 'react';
import styles from './RegisterPage.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';

function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { value, name } = event.target;
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          <span>Name</span>
          <input
            className={styles.input}
            onChange={handleChange}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
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
          Register me
        </button>
      </form>
    </>
  );
}

export default RegisterPage;
